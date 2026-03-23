# INAPOS

Bahasa Indonesia: [README.id.md](README.id.md)

Developer documentation: [docs/README.md](docs/README.md) | Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)

INAPOS is a store operations app for small shops, kiosks, and warungs. It combines checkout, items, stock, customers, purchases, cash tracking, expenses, reporting, team access, device sync, and an AI-first workflow in one workspace. In the desktop app, staff can also operate supported parts of the store through chat by using real store data instead of guesses.

This README is written for people who use the product. It explains what each part of INAPOS does, what you can do in it today, and how the main day-to-day flows work.

## Access and Platforms

INAPOS currently supports these ways to use the product:

- Desktop on Windows, macOS, and Linux
- Android mobile
- Web in the browser at [inapos.netlify.app](https://inapos.netlify.app/)

If you want to install the app, download the latest builds and release assets from:

[github.com/powxenv/inapos/releases](https://github.com/powxenv/inapos/releases)

If you do not want to install anything, you can use the web app at:

[inapos.netlify.app](https://inapos.netlify.app/)

Important: the main store workspace can run in the browser, but the AI assistant runtime is currently desktop-only.

## Who INAPOS Is For

- Store owners who want one place to manage daily sales and operations
- Cashiers who need a fast checkout screen and transaction history
- Small retail teams who share one store and need simple member access
- Shops that want lightweight reporting, stock visibility, and customer tracking

## What INAPOS Helps You Do

- Run checkout from a single screen
- Manage items, stock levels, suppliers, and purchases
- Track customers and repeat spending
- Record cash movements and everyday expenses
- Review daily activity, alerts, and simple business reports
- Switch between multiple stores if you belong to more than one
- Use AI-first chat workflows for questions, summaries, and supported store actions

## Start Here

1. Create an account or sign in.
2. Name your store.
3. Add the items you sell in `Items`.
4. Set quantities and reorder points in `Stock`.
5. Use `Checkout` to save sales.
6. Review `Orders`, `Alerts`, and `Reports` as the day goes on.
7. In the desktop app, use `Assistant` or `Chat view` when you want to work through chat instead of opening module screens.

## How the App Is Organized

INAPOS has three app modes:

- `Full view`: the full store workspace with all modules
- `Checkout view`: a focused front-counter view with only `Checkout` and `Orders`
- `Chat view`: an assistant-only view for AI-first store work

The selected app mode is saved on the current device.

In `Full view`, modules are grouped into these sections:

- `Overview`: Dashboard, Alerts, Today
- `Sales`: Checkout, Orders, Customers, Offers
- `Products`: Items, Stock, Purchases, Suppliers
- `Finance`: Cash, Expenses, Reports
- `Store`: Team, This device, Store details, Assistant setup
- `Assistant`: a dedicated chat workspace

## Module Guide

### Overview

**Dashboard**

- Shows today's sales total
- Shows today's transaction count
- Shows low-stock item count
- Shows current cash balance
- Shows device sync status
- Lists the most recent sales with receipt number, time, payment method, and total

**Alerts**

- Highlights low-stock and out-of-stock items
- Shows in-progress orders
- Warns when device sync has upload or download problems

**Today**

- Shows a same-day activity feed across sales, purchases, expenses, cash entries, and offers
- Gives a quick timeline of what happened today without opening every module

### Sales

**Checkout**

- Search items by name, SKU, or unit
- Add items to a basket
- Attach a saved customer if needed
- Choose a payment method: `Cash`, `Bank transfer`, or `QRIS`
- Review subtotal, total quantity, and basket lines before saving
- Save a sale with a transaction number

When a sale is saved, INAPOS also:

- creates the sale record
- saves its line items
- reduces stock
- updates the selected customer's total spending

**Orders**

- Keeps a searchable list of transactions and manually created orders
- Lets you add, edit, and delete orders
- Tracks customer, date, payment method, status, and total amount
- Supports statuses such as draft, in progress, ready for pickup, completed, and cancelled

Order payment methods include `Cash`, `Bank transfer`, `QRIS`, and `Pay later`.

**Customers**

- Add, edit, search, and delete customers
- Save name, phone number, and address
- See each customer's total spending
- Reuse saved customers during checkout

**Offers**

- Create and manage store offers with name, status, discount type, value, dates, and notes
- Keep active and planned offers in one place
- Search, edit, and delete saved offers

Important: offers are tracked in INAPOS, but they are not applied automatically during checkout in the current product.

### Products

**Items**

- Add and edit the products you sell
- Save selling price, cost price, SKU, barcode, category, and unit
- Search by name, SKU, barcode, or category
- Use practical unit options such as `pcs`, `pack`, `dus`, `kg`, `liter`, `botol`, and `sachet`

**Stock**

- View every product with current stock, reorder point, unit, and stock status
- See whether an item is `In stock`, `Running low`, or `Out of stock`
- Search by item name, SKU, or unit
- Update stock and reorder point from each product row
- Review summary counts for tracked items, low-stock items, out-of-stock items, and healthy stock

**Purchases**

- Keep a simple record of stock purchases
- Save purchase date, invoice number, supplier, status, and total amount
- Use statuses `Draft`, `Ordered`, and `Received`
- Search, edit, and delete purchase records

Important: purchases are record-keeping only right now. Saving a purchase does not increase stock automatically.

**Suppliers**

- Keep a supplier contact list
- Save supplier name, phone number, city, and payment terms
- Use simple payment terms such as `Cash`, `7 days`, `14 days`, and `30 days`
- Search, edit, and delete suppliers

### Finance

**Cash**

- Track cash in and cash out entries manually
- Add, edit, search, and delete entries
- Save title, entry type, amount, date, and an optional note
- See current balance, money in today, money out today, and saved entry count

**Expenses**

- Record everyday spending in one place
- Add, edit, search, and delete expenses
- Save title, category, amount, and date
- Use categories such as electricity, water, transport, packaging, wages, maintenance, and other
- See today's expense total, this month's expense total, and saved entry count

**Reports**

- Review a simple summary of sales, costs, expenses, cash, and purchases
- Switch between `Today`, `Last 7 days`, `Last 30 days`, and `This month`
- See sales total, order count, estimated item cost, estimated gross profit, expenses, estimated money left, and purchase spending
- See payment method breakdowns, expense categories, and top-selling items
- Get quick takeaways such as average sale value and the share of sales spent on expenses

Important: reports are card- and table-based. There are no charts, exports, prints, or scheduled reports in the current product.

### Store

Some store controls are role-aware. `Store details` and `This device` are shown only to store owners or admins, and team management actions are limited to those roles.

**Team**

- View current members and pending invitations
- Invite people by email as `Admin` or `Team member`
- Promote, demote, remove members, and cancel invitations if you have admin access

Regular members can still view team information, but only owners and admins can manage it.

**This device**

- See whether the device is connected
- See whether local changes are being sent
- See whether updates are being downloaded
- Notice when the device is offline, checking, up to date, or needs attention

This screen is informational. It does not include a manual sync button or device management tools.

**Store details**

- Edit store name
- Save store phone or WhatsApp number
- Save store address
- Save receipt footer text
- Choose the store currency

Supported currencies:

- `IDR`
- `USD`
- `SGD`
- `EUR`
- `GBP`
- `JPY`

The selected store currency is used across the app for totals and prices when that store is open.

**Assistant setup**

- Choose whether the assistant uses on-device AI or online AI
- Pick a default model
- Check setup status again
- Download a recommended on-device model
- Save or remove an online assistant key

The assistant setup is optional. INAPOS can still be used normally without it, but the desktop app unlocks the AI-first workflow.

### Assistant

The assistant is a separate workspace for store questions, guided help, and AI-first store operations.

It can help with things like:

- summarizing today's sales
- spotting stock that needs attention
- finding top-selling items
- reviewing big expenses
- explaining how a workflow works
- suggesting offer ideas
- checking products, stock, customers, suppliers, cash, expenses, promotions, and purchases against live store data

It also has built-in store data tools, so it is designed to use real store information instead of guessing. In the current product, it can read store records and perform supported store actions through chat, including:

- adding, updating, and deleting products
- adjusting stock records
- adding, updating, and deleting customers
- adding, updating, and deleting suppliers
- adding, updating, and deleting cash entries
- adding, updating, and deleting expenses
- adding, updating, and deleting promotions
- adding, updating, and deleting purchases
- creating full sales
- deleting sales and restoring related stock and customer totals

Assistant chat includes:

- starter question chips
- streaming replies
- markdown-formatted answers
- `Enter` to send
- `Shift + Enter` for a new line

Important:

- The assistant is store-specific, so it works inside the store you currently have open.
- The assistant is the main path for AI-first workflow in the current product.
- Many supported store tasks can be completed entirely through chat without opening the main module screens.
- Assistant replies are currently written in simple English.

## Key User Flows

### 1. First-Time Setup

1. Sign up or sign in.
2. If you do not have a store yet, INAPOS asks you to name one.
3. After that, the app opens your store workspace.

There is no long onboarding wizard in the current product. The first setup is intentionally short.

### 2. Daily Selling Flow

1. Add products in `Items`.
2. Enter quantities and reorder points in `Stock`.
3. Save customers in `Customers` if you want faster repeat checkout.
4. Open `Checkout`.
5. Search items, build the basket, choose payment, and save the sale.
6. Review completed sales and manual orders in `Orders`.

### 3. Stock and Reordering Flow

1. Open `Stock` to see what is healthy, low, or out of stock.
2. Use `Alerts` for quick low-stock visibility.
3. Update stock counts per item.
4. Save supplier details in `Suppliers`.
5. Record stock purchases in `Purchases`.

Important: recording a purchase does not add stock automatically, so stock must still be updated separately.

### 4. Finance Review Flow

1. Use `Cash` for manual money in and money out records.
2. Use `Expenses` for daily operating costs.
3. Open `Reports` to compare sales, expenses, purchases, and estimated profit.
4. Use `Today` for a timeline of what happened today.

### 5. Multi-Store Flow

- Switch stores from the store picker in the header
- Create another store from the same header menu
- Keep each store separate inside its own workspace

### 6. AI-First Workflow

1. Open `Assistant` or switch to `Chat view` in the desktop app.
2. Ask a question against real store data or tell the assistant what to do.
3. Let the assistant check records, summarize business state, or run a supported store action.
4. Stay in chat if you want to keep operating without opening the main module screens.

This flow is best for users who want to manage products, stock, sales, and daily store operations with natural language instead of UI navigation.

## Preferences and Personalization

### Profile

- Edit your display name from the user menu
- View your account email there

### Language

- Choose `English` or `Bahasa Indonesia`
- Language is saved on the current device
- Dates, numbers, and formatting follow the selected language

### Currency

- Currency is a store setting, not a per-user preference
- Store currency is chosen in `Store details`
- Prices and totals follow the active store currency

### App Mode

- Switch between `Full view`, `Checkout view`, and `Chat view`
- This is saved on the current device

## AI Workflow Options

INAPOS supports two AI workflow modes:

- `On-device AI` with Ollama
- `Online AI` with OpenRouter

### On-device AI

- Runs through Ollama
- Lets you choose from installed local models
- Includes a recommended starter model: `qwen3.5:0.8b`
- Shows in-app download progress for the recommended model

### Online AI

- Uses OpenRouter
- Lets you choose from free text-capable models
- Requires saving an online sign-in key on the device

### What You Need to Know

- The AI-first workflow is optional.
- The AI runtime works only in the desktop app in the current product.
- The rest of the store workspace still works as a local-first app with device sync.
- On-device AI requires Ollama to be installed and running, with at least one model available.
- Online AI requires a saved OpenRouter key.

## Language, Currency, and Payments

### Supported languages

- English
- Bahasa Indonesia

### Supported store currencies

- IDR
- USD
- SGD
- EUR
- GBP
- JPY

### Payment methods used in the current product

- Checkout: Cash, Bank transfer, QRIS
- Orders: Cash, Bank transfer, QRIS, Pay later

## Devices, Sync, and Availability

- INAPOS keeps store data on the device and syncs changes in the background
- The `This device` module shows connection health, uploads, and downloads
- Sync status can show `Offline`, `Checking`, `Up to date`, or `Needs attention`
- Background sync is automatic in the current product

The AI runtime is explicitly desktop-only. The rest of the workspace is organized as a local-first store app with device sync and store switching across the rest of the product.

## Important Scope Notes

These are useful to know before you rely on a flow:

- `Offers` are tracked in the app but are not auto-applied during checkout
- `Purchases` do not increase stock automatically
- `Orders` do not currently show item-by-item order detail
- `Reports` use preset date ranges only
- `Reports` do not export, print, or schedule
- `This device` shows sync status only and does not offer manual sync controls
- Language is the only user preference in the current preferences dialog

## In Short

INAPOS is a lightweight store workspace for selling, tracking stock, managing daily operations, and checking the health of a small retail business. It is strongest when used as an all-in-one local-first tool for checkout, stock awareness, simple finance tracking, and store-level visibility, with an AI-first workflow in the desktop app for users who want to run supported store operations directly through chat.
