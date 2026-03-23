begin;

select set_config('app.seed_store_id', 'REPLACE_WITH_STORE_ID', false);

insert into public.stores (
  id,
  store_id,
  store_name,
  phone,
  address,
  receipt_note,
  currency_code,
  created_at,
  updated_at
)
values (
  'seed-store-row',
  current_setting('app.seed_store_id'),
  'Hudson Corner Market',
  '+1-212-555-0147',
  '125 Spring Street, Brooklyn, NY',
  'Thanks for shopping with us.',
  'USD',
  '2026-03-20T08:00:00+07:00',
  '2026-03-23T09:00:00+07:00'
)
on conflict (store_id) do update
set
  store_name = excluded.store_name,
  phone = excluded.phone,
  address = excluded.address,
  receipt_note = excluded.receipt_note,
  currency_code = excluded.currency_code,
  updated_at = excluded.updated_at;

insert into public.suppliers (
  id,
  store_id,
  name,
  phone,
  city,
  payment_term,
  created_at,
  updated_at
)
values
  (
    'seed-supplier-pantry',
    current_setting('app.seed_store_id'),
    'Global Pantry Foods',
    '+1-718-555-0111',
    'New York',
    '7-hari',
    '2026-03-18T09:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-supplier-beverage',
    current_setting('app.seed_store_id'),
    'North Star Beverage Co.',
    '+1-201-555-0122',
    'Jersey City',
    '14-hari',
    '2026-03-18T09:30:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-supplier-home',
    current_setting('app.seed_store_id'),
    'Bright Home Essentials',
    '+1-973-555-0133',
    'Newark',
    'cash',
    '2026-03-18T10:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  )
on conflict (id) do update
set
  store_id = excluded.store_id,
  name = excluded.name,
  phone = excluded.phone,
  city = excluded.city,
  payment_term = excluded.payment_term,
  updated_at = excluded.updated_at;

insert into public.products (
  id,
  store_id,
  sku,
  barcode,
  name,
  category,
  unit,
  cost_price,
  selling_price,
  is_active,
  created_at,
  updated_at
)
values
  (
    'seed-product-cornflakes',
    current_setting('app.seed_store_id'),
    'KLG-CF500',
    '038000011111',
    'Kellogg''s Corn Flakes 500 g',
    'sembako',
    'pack',
    4.80,
    6.50,
    true,
    '2026-03-18T10:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-product-nutella',
    current_setting('app.seed_store_id'),
    'NTL-350G',
    '009800022222',
    'Nutella Hazelnut Spread 350 g',
    'sembako',
    'pack',
    3.90,
    5.50,
    true,
    '2026-03-18T10:05:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-product-ketchup',
    current_setting('app.seed_store_id'),
    'HNZ-KTC1L',
    '001300033333',
    'Heinz Tomato Ketchup 1 L',
    'sembako',
    'botol',
    3.20,
    4.80,
    true,
    '2026-03-18T10:10:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-product-pringles',
    current_setting('app.seed_store_id'),
    'PRG-ORG',
    '038000044444',
    'Pringles Original 110 g',
    'makanan-ringan',
    'pcs',
    1.50,
    2.50,
    true,
    '2026-03-18T10:15:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-product-nescafe',
    current_setting('app.seed_store_id'),
    'NSC-CLS',
    '028000055555',
    'Nescafe Classic Sachet',
    'minuman',
    'sachet',
    0.60,
    1.25,
    true,
    '2026-03-18T10:20:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-product-coke',
    current_setting('app.seed_store_id'),
    'CCL-450',
    '049000066666',
    'Coca-Cola 450 ml',
    'minuman',
    'botol',
    0.80,
    1.75,
    true,
    '2026-03-18T10:25:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-product-tide',
    current_setting('app.seed_store_id'),
    'TDE-800',
    '030772077777',
    'Tide Laundry Detergent 800 ml',
    'kebersihan',
    'botol',
    6.20,
    8.75,
    true,
    '2026-03-18T10:30:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-product-kleenex',
    current_setting('app.seed_store_id'),
    'KLX-250',
    '036000088888',
    'Kleenex Facial Tissue 250 Sheets',
    'perawatan-rumah',
    'pack',
    2.10,
    3.25,
    true,
    '2026-03-18T10:35:00+07:00',
    '2026-03-23T09:00:00+07:00'
  )
on conflict (id) do update
set
  store_id = excluded.store_id,
  sku = excluded.sku,
  barcode = excluded.barcode,
  name = excluded.name,
  category = excluded.category,
  unit = excluded.unit,
  cost_price = excluded.cost_price,
  selling_price = excluded.selling_price,
  is_active = excluded.is_active,
  updated_at = excluded.updated_at;

insert into public.inventory_items (
  id,
  store_id,
  product_id,
  on_hand,
  reorder_point,
  created_at,
  updated_at
)
values
  (
    'seed-inventory-cornflakes',
    current_setting('app.seed_store_id'),
    'seed-product-cornflakes',
    24,
    8,
    '2026-03-18T11:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-inventory-nutella',
    current_setting('app.seed_store_id'),
    'seed-product-nutella',
    18,
    6,
    '2026-03-18T11:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-inventory-ketchup',
    current_setting('app.seed_store_id'),
    'seed-product-ketchup',
    12,
    5,
    '2026-03-18T11:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-inventory-pringles',
    current_setting('app.seed_store_id'),
    'seed-product-pringles',
    72,
    20,
    '2026-03-18T11:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-inventory-nescafe',
    current_setting('app.seed_store_id'),
    'seed-product-nescafe',
    96,
    30,
    '2026-03-18T11:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-inventory-coke',
    current_setting('app.seed_store_id'),
    'seed-product-coke',
    5,
    8,
    '2026-03-18T11:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-inventory-tide',
    current_setting('app.seed_store_id'),
    'seed-product-tide',
    3,
    4,
    '2026-03-18T11:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-inventory-kleenex',
    current_setting('app.seed_store_id'),
    'seed-product-kleenex',
    14,
    5,
    '2026-03-18T11:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  )
on conflict (id) do update
set
  store_id = excluded.store_id,
  product_id = excluded.product_id,
  on_hand = excluded.on_hand,
  reorder_point = excluded.reorder_point,
  updated_at = excluded.updated_at;

insert into public.promotions (
  id,
  store_id,
  title,
  status,
  discount_type,
  discount_value,
  start_at,
  end_at,
  description,
  created_at,
  updated_at
)
values
  (
    'seed-promo-nescafe',
    current_setting('app.seed_store_id'),
    'Nescafe Morning Deal',
    'active',
    'nominal',
    0.50,
    '2026-03-20T00:00:00+07:00',
    '2026-03-31T23:59:59+07:00',
    'Save $0.50 on every Nescafe Classic Sachet.',
    '2026-03-20T07:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-promo-coke',
    current_setting('app.seed_store_id'),
    'Coca-Cola Weekend Sale',
    'scheduled',
    'percent',
    10,
    '2026-03-25T00:00:00+07:00',
    '2026-03-30T23:59:59+07:00',
    'Get 10 percent off Coca-Cola 450 ml.',
    '2026-03-21T07:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  )
on conflict (id) do update
set
  store_id = excluded.store_id,
  title = excluded.title,
  status = excluded.status,
  discount_type = excluded.discount_type,
  discount_value = excluded.discount_value,
  start_at = excluded.start_at,
  end_at = excluded.end_at,
  description = excluded.description,
  updated_at = excluded.updated_at;

insert into public.purchases (
  id,
  store_id,
  supplier_id,
  invoice_number,
  status,
  total_amount,
  purchased_at,
  created_at,
  updated_at
)
values
  (
    'seed-purchase-001',
    current_setting('app.seed_store_id'),
    'seed-supplier-pantry',
    'PUR-20260318-001',
    'received',
    480.00,
    '2026-03-18T09:00:00+07:00',
    '2026-03-18T09:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-purchase-002',
    current_setting('app.seed_store_id'),
    'seed-supplier-beverage',
    'PUR-20260322-002',
    'ordered',
    165.00,
    '2026-03-22T13:00:00+07:00',
    '2026-03-22T13:00:00+07:00',
    '2026-03-23T09:00:00+07:00'
  ),
  (
    'seed-purchase-003',
    current_setting('app.seed_store_id'),
    'seed-supplier-home',
    'PUR-20260323-003',
    'draft',
    92.00,
    '2026-03-23T10:00:00+07:00',
    '2026-03-23T10:00:00+07:00',
    '2026-03-23T10:00:00+07:00'
  )
on conflict (id) do update
set
  store_id = excluded.store_id,
  supplier_id = excluded.supplier_id,
  invoice_number = excluded.invoice_number,
  status = excluded.status,
  total_amount = excluded.total_amount,
  purchased_at = excluded.purchased_at,
  updated_at = excluded.updated_at;

insert into public.sales (
  id,
  store_id,
  receipt_number,
  customer_id,
  payment_method,
  status,
  total_amount,
  created_at,
  updated_at
)
values
  (
    'seed-sale-001',
    current_setting('app.seed_store_id'),
    'TRX-20260322-001',
    null,
    'qris',
    'completed',
    17.50,
    '2026-03-22T10:15:00+07:00',
    '2026-03-22T10:15:00+07:00'
  ),
  (
    'seed-sale-002',
    current_setting('app.seed_store_id'),
    'TRX-20260323-001',
    null,
    'cash',
    'completed',
    19.05,
    '2026-03-23T09:10:00+07:00',
    '2026-03-23T09:10:00+07:00'
  ),
  (
    'seed-sale-003',
    current_setting('app.seed_store_id'),
    'ORD-20260323-001',
    null,
    'tempo',
    'ready',
    30.00,
    '2026-03-23T11:20:00+07:00',
    '2026-03-23T11:20:00+07:00'
  ),
  (
    'seed-sale-004',
    current_setting('app.seed_store_id'),
    'ORD-20260323-002',
    null,
    'transfer',
    'ordered',
    18.30,
    '2026-03-23T14:00:00+07:00',
    '2026-03-23T14:00:00+07:00'
  )
on conflict (id) do update
set
  store_id = excluded.store_id,
  receipt_number = excluded.receipt_number,
  customer_id = excluded.customer_id,
  payment_method = excluded.payment_method,
  status = excluded.status,
  total_amount = excluded.total_amount,
  created_at = excluded.created_at,
  updated_at = excluded.updated_at;

insert into public.sale_items (
  id,
  sale_id,
  product_id,
  quantity,
  unit_price,
  line_total,
  created_at,
  updated_at
)
values
  (
    'seed-sale-item-001',
    'seed-sale-001',
    'seed-product-cornflakes',
    1,
    6.50,
    6.50,
    '2026-03-22T10:15:00+07:00',
    '2026-03-22T10:15:00+07:00'
  ),
  (
    'seed-sale-item-002',
    'seed-sale-001',
    'seed-product-nescafe',
    4,
    1.25,
    5.00,
    '2026-03-22T10:15:00+07:00',
    '2026-03-22T10:15:00+07:00'
  ),
  (
    'seed-sale-item-003',
    'seed-sale-001',
    'seed-product-coke',
    2,
    1.75,
    3.50,
    '2026-03-22T10:15:00+07:00',
    '2026-03-22T10:15:00+07:00'
  ),
  (
    'seed-sale-item-004',
    'seed-sale-001',
    'seed-product-pringles',
    1,
    2.50,
    2.50,
    '2026-03-22T10:15:00+07:00',
    '2026-03-22T10:15:00+07:00'
  ),
  (
    'seed-sale-item-005',
    'seed-sale-002',
    'seed-product-nutella',
    2,
    5.50,
    11.00,
    '2026-03-23T09:10:00+07:00',
    '2026-03-23T09:10:00+07:00'
  ),
  (
    'seed-sale-item-006',
    'seed-sale-002',
    'seed-product-ketchup',
    1,
    4.80,
    4.80,
    '2026-03-23T09:10:00+07:00',
    '2026-03-23T09:10:00+07:00'
  ),
  (
    'seed-sale-item-007',
    'seed-sale-002',
    'seed-product-kleenex',
    1,
    3.25,
    3.25,
    '2026-03-23T09:10:00+07:00',
    '2026-03-23T09:10:00+07:00'
  ),
  (
    'seed-sale-item-008',
    'seed-sale-003',
    'seed-product-tide',
    2,
    8.75,
    17.50,
    '2026-03-23T11:20:00+07:00',
    '2026-03-23T11:20:00+07:00'
  ),
  (
    'seed-sale-item-009',
    'seed-sale-003',
    'seed-product-nescafe',
    10,
    1.25,
    12.50,
    '2026-03-23T11:20:00+07:00',
    '2026-03-23T11:20:00+07:00'
  ),
  (
    'seed-sale-item-010',
    'seed-sale-004',
    'seed-product-ketchup',
    1,
    4.80,
    4.80,
    '2026-03-23T14:00:00+07:00',
    '2026-03-23T14:00:00+07:00'
  ),
  (
    'seed-sale-item-011',
    'seed-sale-004',
    'seed-product-coke',
    2,
    1.75,
    3.50,
    '2026-03-23T14:00:00+07:00',
    '2026-03-23T14:00:00+07:00'
  ),
  (
    'seed-sale-item-012',
    'seed-sale-004',
    'seed-product-pringles',
    4,
    2.50,
    10.00,
    '2026-03-23T14:00:00+07:00',
    '2026-03-23T14:00:00+07:00'
  )
on conflict (id) do update
set
  sale_id = excluded.sale_id,
  product_id = excluded.product_id,
  quantity = excluded.quantity,
  unit_price = excluded.unit_price,
  line_total = excluded.line_total,
  updated_at = excluded.updated_at;

insert into public.expenses (
  id,
  store_id,
  title,
  category,
  amount,
  paid_at,
  created_at,
  updated_at
)
values
  (
    'seed-expense-001',
    current_setting('app.seed_store_id'),
    'Weekly electricity bill',
    'listrik',
    85.00,
    '2026-03-21T16:00:00+07:00',
    '2026-03-21T16:00:00+07:00',
    '2026-03-21T16:00:00+07:00'
  ),
  (
    'seed-expense-002',
    current_setting('app.seed_store_id'),
    'Paper bag restock',
    'kemasan',
    24.00,
    '2026-03-22T11:00:00+07:00',
    '2026-03-22T11:00:00+07:00',
    '2026-03-22T11:00:00+07:00'
  ),
  (
    'seed-expense-003',
    current_setting('app.seed_store_id'),
    'Supplier pickup fuel',
    'transport',
    18.00,
    '2026-03-23T08:30:00+07:00',
    '2026-03-23T08:30:00+07:00',
    '2026-03-23T08:30:00+07:00'
  ),
  (
    'seed-expense-004',
    current_setting('app.seed_store_id'),
    'Shelf maintenance',
    'perawatan',
    45.00,
    '2026-03-23T13:15:00+07:00',
    '2026-03-23T13:15:00+07:00',
    '2026-03-23T13:15:00+07:00'
  )
on conflict (id) do update
set
  store_id = excluded.store_id,
  title = excluded.title,
  category = excluded.category,
  amount = excluded.amount,
  paid_at = excluded.paid_at,
  updated_at = excluded.updated_at;

insert into public.cash_entries (
  id,
  store_id,
  title,
  entry_type,
  amount,
  happened_at,
  note,
  created_at,
  updated_at
)
values
  (
    'seed-cash-001',
    current_setting('app.seed_store_id'),
    'Opening cash float',
    'in',
    500.00,
    '2026-03-23T07:00:00+07:00',
    'Starting drawer balance.',
    '2026-03-23T07:00:00+07:00',
    '2026-03-23T07:00:00+07:00'
  ),
  (
    'seed-cash-002',
    current_setting('app.seed_store_id'),
    'Supplier cash payment',
    'out',
    175.00,
    '2026-03-23T10:30:00+07:00',
    'Partial payment for pantry stock invoice.',
    '2026-03-23T10:30:00+07:00',
    '2026-03-23T10:30:00+07:00'
  ),
  (
    'seed-cash-003',
    current_setting('app.seed_store_id'),
    'Cash sales deposit',
    'in',
    19.05,
    '2026-03-23T12:00:00+07:00',
    'Recorded from completed cash checkout.',
    '2026-03-23T12:00:00+07:00',
    '2026-03-23T12:00:00+07:00'
  ),
  (
    'seed-cash-004',
    current_setting('app.seed_store_id'),
    'Daily expense payout',
    'out',
    18.00,
    '2026-03-23T15:00:00+07:00',
    'Fuel reimbursement for supplier pickup.',
    '2026-03-23T15:00:00+07:00',
    '2026-03-23T15:00:00+07:00'
  )
on conflict (id) do update
set
  store_id = excluded.store_id,
  title = excluded.title,
  entry_type = excluded.entry_type,
  amount = excluded.amount,
  happened_at = excluded.happened_at,
  note = excluded.note,
  updated_at = excluded.updated_at;

commit;
