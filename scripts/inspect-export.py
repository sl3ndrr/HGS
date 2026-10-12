"""Inspect a supplied ZIP and import ONLY the documented logo; no bulk CSS/font reuse.
Usage: python3 scripts/inspect-export.py /absolute/path/export.zip
"""
import sys, zipfile, pathlib, json, hashlib
root=pathlib.Path(__file__).resolve().parents[1]
if len(sys.argv)!=2: raise SystemExit('ZIP fehlt. Aufruf: python3 scripts/inspect-export.py /pfad/export.zip')
with zipfile.ZipFile(sys.argv[1]) as archive:
    inventory=[]; candidates=[]
    for info in archive.infolist():
        name=pathlib.PurePosixPath(info.filename)
        if name.is_absolute() or '..' in name.parts: raise SystemExit('Unsicherer Archivpfad; Import abgebrochen.')
        inventory.append({'path':info.filename,'bytes':info.file_size})
        if name.name=='logo-heinrich-grupe-schule-mit-bg.png': candidates.append(info)
    (root/'docs/export-inventory.json').write_text(json.dumps(inventory,ensure_ascii=False,indent=2)+'\n')
    if len(candidates)!=1: raise SystemExit(f'Logo nicht eindeutig: {len(candidates)} Treffer. Inventar geschrieben; manuell zuordnen.')
    info=candidates[0]
    if info.file_size>10_000_000: raise SystemExit('Unerwartete Logogröße; Import abgebrochen.')
    logo=archive.read(info)
    if not logo.startswith(b'\x89PNG\r\n\x1a\n'): raise SystemExit('Logo ist keine PNG-Datei.')
    (root/'public/assets/school-logo.png').write_bytes(logo)
    settings=json.loads((root/'content/settings.json').read_text());settings['logoFile']='/assets/school-logo.png'
    (root/'content/settings.json').write_text(json.dumps(settings,ensure_ascii=False,indent=2)+'\n')
    (root/'docs/logo-provenance.json').write_text(json.dumps({'exportPath':info.filename,'localFile':'public/assets/school-logo.png','originalUrl':None,'sha256':hashlib.sha256(logo).hexdigest(),'status':'Aus bereitgestelltem Originalexport übernommen; Remote-URL unbekannt'},indent=2)+'\n')
    print(f'{len(inventory)} Archiveinträge untersucht; Original-Logo übernommen. Sonstige Medien müssen anhand des Registers zugeordnet werden.')
