// Historical evidence is a required subset, never a ceiling for live content.
export function assertMigration(data, inventory) {
  if (inventory.version !== 1) throw Error('Migrationsinventar: unbekannte Version');
  const equal = (actual, expected, context) => {
    if (actual !== expected) throw Error(`${context}: historischer Originalwert geändert (${JSON.stringify(expected)})`);
  };
  for (const key of ['news', 'media', 'refs', 'documents']) {
    const current = new Map(data[key].map(item => [item.id, item]));
    for (const original of inventory[key]) {
      const item = current.get(original.id);
      if (!item) throw Error(`${key}[${original.id}]: historische ID aus Migrationsinventar fehlt`);
      for (const [field, value] of Object.entries(original)) {
        if (field === 'referenceIds') {
          for (const id of value) {
            if (!item.referenceIds.includes(id)) throw Error(`${key}[${item.id}].referenceIds: historischer Verweis ${id} fehlt`);
          }
        } else equal(item[field], value, `${key}[${item.id}].${field}`);
      }
    }
  }
}
