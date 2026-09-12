import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createPreparationSummary } from '../server/preparationSummary.ts';

test('createPreparationSummary računa seed rezultat', () => {
	const items = Array.from({ length: 8 }, (_, index) => ({
		id: index + 1,
		title: `Stavka ${index + 1}`,
		completed: index < 3
	}));

	assert.deepEqual(createPreparationSummary(items), {
		total: 8,
		completed: 3,
		remaining: 5,
		percentage: 38
	});
});

test('createPreparationSummary vraća nule za prazan niz', () => {
	assert.deepEqual(createPreparationSummary([]), {
		total: 0,
		completed: 0,
		remaining: 0,
		percentage: 0
	});
});
