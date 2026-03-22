create extension if not exists pgcrypto;

create table if not exists public.stores (
  id text primary key,
  name text not null,
  owner_name text,
  phone text,
  address text,
  currency text not null default 'IDR',
  timezone text not null default 'Asia/Jakarta',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.customers (
  id text primary key default gen_random_uuid()::text,
  store_id text not null references public.stores(id) on delete cascade,
  name text not null,
  phone text,
  address text,
  total_spent numeric(14, 2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.suppliers (
  id text primary key default gen_random_uuid()::text,
  store_id text not null references public.stores(id) on delete cascade,
  name text not null,
  phone text,
  city text,
  payment_term text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.products (
  id text primary key default gen_random_uuid()::text,
  store_id text not null references public.stores(id) on delete cascade,
  sku text,
  barcode text,
  name text not null,
  category text,
  unit text,
  cost_price numeric(14, 2) not null default 0,
  selling_price numeric(14, 2) not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.inventory_items (
  id text primary key default gen_random_uuid()::text,
  store_id text not null references public.stores(id) on delete cascade,
  product_id text not null references public.products(id) on delete cascade,
  on_hand numeric(14, 2) not null default 0,
  reorder_point numeric(14, 2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (store_id, product_id)
);

create table if not exists public.purchases (
  id text primary key default gen_random_uuid()::text,
  store_id text not null references public.stores(id) on delete cascade,
  supplier_id text references public.suppliers(id) on delete set null,
  invoice_number text,
  status text not null default 'draft',
  total_amount numeric(14, 2) not null default 0,
  purchased_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sales (
  id text primary key default gen_random_uuid()::text,
  store_id text not null references public.stores(id) on delete cascade,
  receipt_number text,
  customer_id text references public.customers(id) on delete set null,
  payment_method text,
  status text not null default 'draft',
  total_amount numeric(14, 2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sale_items (
  id text primary key default gen_random_uuid()::text,
  sale_id text not null references public.sales(id) on delete cascade,
  product_id text references public.products(id) on delete set null,
  quantity numeric(14, 2) not null default 0,
  unit_price numeric(14, 2) not null default 0,
  line_total numeric(14, 2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.expenses (
  id text primary key default gen_random_uuid()::text,
  store_id text not null references public.stores(id) on delete cascade,
  title text not null,
  category text,
  amount numeric(14, 2) not null default 0,
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_customers_store_id on public.customers(store_id);
create index if not exists idx_suppliers_store_id on public.suppliers(store_id);
create index if not exists idx_products_store_id on public.products(store_id);
create index if not exists idx_inventory_items_store_id on public.inventory_items(store_id);
create index if not exists idx_inventory_items_product_id on public.inventory_items(product_id);
create index if not exists idx_purchases_store_id on public.purchases(store_id);
create index if not exists idx_sales_store_id on public.sales(store_id);
create index if not exists idx_sales_customer_id on public.sales(customer_id);
create index if not exists idx_sale_items_sale_id on public.sale_items(sale_id);
create index if not exists idx_expenses_store_id on public.expenses(store_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists stores_set_updated_at on public.stores;
create trigger stores_set_updated_at
before update on public.stores
for each row
execute function public.set_updated_at();

drop trigger if exists customers_set_updated_at on public.customers;
create trigger customers_set_updated_at
before update on public.customers
for each row
execute function public.set_updated_at();

drop trigger if exists suppliers_set_updated_at on public.suppliers;
create trigger suppliers_set_updated_at
before update on public.suppliers
for each row
execute function public.set_updated_at();

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
before update on public.products
for each row
execute function public.set_updated_at();

drop trigger if exists inventory_items_set_updated_at on public.inventory_items;
create trigger inventory_items_set_updated_at
before update on public.inventory_items
for each row
execute function public.set_updated_at();

drop trigger if exists purchases_set_updated_at on public.purchases;
create trigger purchases_set_updated_at
before update on public.purchases
for each row
execute function public.set_updated_at();

drop trigger if exists sales_set_updated_at on public.sales;
create trigger sales_set_updated_at
before update on public.sales
for each row
execute function public.set_updated_at();

drop trigger if exists sale_items_set_updated_at on public.sale_items;
create trigger sale_items_set_updated_at
before update on public.sale_items
for each row
execute function public.set_updated_at();

drop trigger if exists expenses_set_updated_at on public.expenses;
create trigger expenses_set_updated_at
before update on public.expenses
for each row
execute function public.set_updated_at();
