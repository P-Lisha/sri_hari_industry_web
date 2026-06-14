/* ===========================================================
   SRI HARI INDUSTRIES — SITE CONTENT / DATA
   -----------------------------------------------------------
   This is the file you edit to change content. No logic here.
     • SITE        → contact details used by WhatsApp buttons
     • PCATS       → product categories + products
     • CATMETA     → icon + blurb for each category card
     • INDUSTRIES  → "industries we serve" popups
   How to add a product:  add a line to the right category's
   items[] as  ["Display Name","image-slug"]  and drop the
   photo at  images/products/image-slug.jpg
   Optional long form: ["Name","slug","description",[features],[[spec,value]]]
   =========================================================== */

/* ---- Contact (used by all WhatsApp enquiry buttons) ---- */
const SITE = { whatsapp: "919443392337" };

/* ---- Full product catalog, grouped by category ----
   item = [name, slug, desc?, feats?, specs?]  (desc/feats fall back to category defaults) */
const PCATS=[
 {cat:"Cooking Equipment",
  tag:"a heavy-duty LPG cooking unit in food-grade stainless steel, built for daily high-volume use.",
  feats:["Food-grade SS 304 body","High-efficiency burners","Heavy-duty commercial build","Custom sizes on request"],
  items:[
   ["Single Burner","single-burner"],["Two Burner","two-burner"],["Three Burner","three-burner"],
   ["Bulk Cooking Range","bulk-cooking-range"],["Tandoori","tandoori"],["Chinese Range","chinese-range"],
   ["Four Burner Continental","four-burner-continental"],
   ["Barbeque","barbeque"],["Griller","griller"],["Shawarma","shawarma"],["Deep Fryer","deep-fryer"],
   ["Bulk Cooker","bulk-cooker"],["Hot Plate with Griddle","hot-plate-griddle"],
   ["Dosa Plate","dosa-plate"],["Chappathi Plate","chappathi-plate"]]},
 {cat:"Indian Range & Automakers",
  tag:"an automatic / steam machine that boosts output and consistency for high-demand kitchens.",
  feats:["Food-grade stainless steel","High, consistent output","Low manpower & maintenance","Custom capacities available"],
  items:[
   ["Steam Boiler","steam-boiler","Compact steam generator that powers bulk steam cooking — idli, rice, dhal and more — with fast steam-up and low fuel use.",
     ["Fast steam generation","Pressure gauge & safety valve","Low fuel consumption","50–500 L capacity options"],
     [["Capacity","50 – 500 litres"],["Material","SS 304 food-grade"],["Fuel","LPG / Diesel / Electric"]]],
   ["Rice / Dhal Vessels","rice-dhal-vessels","Steam-jacketed vessels for cooking rice, sambar and dhal in bulk with even, no-burn heat."],
   ["Janatha Idly Plant","janatha-idly-plant","High-capacity idli steaming plant that turns out soft idlis in large batches for messes and halls."],
   ["Idiyappam Machine","idiyappam-machine","Steam idiyappam press for soft, consistent string hoppers in volume."],
   ["Ball Cutting Machine","ball-cutting-machine","Cuts dough into uniform balls at speed for chapati and poori production."],
   ["Ball Pressing Machine","ball-pressing-machine","Presses dough balls into even rounds, ready for roasting."],
   ["Chappathi Making Machine","chappathi-making-machine","Fully automatic chapati machine that presses, roasts and puffs uniform chapatis at high speed.",
     ["Uniform size & thickness","Press + roast + puff in one","High-speed automatic output","Low manpower needed"],
     [["Output","1,000 – 2,000 / hr"],["Material","SS 304 + MS frame"],["Power","Electric + LPG"]]]]},
 {cat:"Food Processing Machinery",
  tag:"a commercial food-processing machine that cuts prep time and labour across the kitchen.",
  feats:["Powerful commercial motor","Food-grade contact parts","Easy to operate & clean","Durable heavy-duty build"],
  items:[
   ["Rice Washer","rice-washer"],["Wet Grinder","wet-grinder"],["Tilting Grinder","tilting-grinder"],
   ["Pulverizer","pulverizer"],["Masala Grinder","masala-grinder"],["Veg Cutting Machine","veg-cutting-machine"],
   ["Onion Peeler","onion-peeler"],["Potato Peeler","potato-peeler"]]},
 {cat:"Tables, Sinks & Racks",
  tag:"stainless steel fabrication built for hygiene, strength and everyday commercial use.",
  feats:["100% SS 304 / 202 build","Sturdy, rust-free fabrication","Hygienic & easy to clean","Made to your size"],
  items:[
   ["Work Table","work-table"],
   ["Kneading Table","kneading-table"],["Worktable with Sink","worktable-sink"],
   ["Two Sink Unit","two-sink-unit"],["Three Sink Unit","three-sink-unit"],["Chute Table","chute-table"],
   ["Hand Wash Unit","hand-wash"],["Dish Washer","dish-washer"],["Dish Rack","dish-rack"],
   ["Veg Rack","veg-rack"],["Pot Rack","pot-rack"],["Plate Rack","plate-rack"]]},
 {cat:"Dining & Service",
  tag:"service-line / dining equipment for canteens, messes and food courts.",
  feats:["Durable commercial-grade build","Hygienic stainless steel","Designed for fast service","Custom sizes available"],
  items:[
   ["Bain-Marie Counter","bainmarie-counter"],["Plate Warmer","plate-warmer"],["Hot Case","hot-case"],
   ["Dining Table","dining-table"],["6 Seater Dining Table","dining-6-seater"]]},
 {cat:"Cold Room & Refrigeration",
  tag:"temperature-controlled storage that keeps ingredients fresh and safe.",
  feats:["Precise temperature control","Energy-efficient cooling","Food-safe insulated build","Custom sizes available"],
  items:[
   ["Cold Room","cold-room","Modular walk-in cold room for bulk storage of vegetables, dairy, meat and frozen goods."],
   ["Work Top Freezer","work-top-freezer"]]},
 {cat:"Trolleys & Storage",
  tag:"a mobile / storage stainless steel solution that keeps kitchens organised and efficient.",
  feats:["Smooth-rolling castors","Rust-free SS build","Heavy load capacity","Custom sizes available"],
  items:[
   ["Utility Trolley","utility-trolley"],["Masala Trolley","masala-trolley"],
   ["Room Service Trolley","room-service-trolley"],["Snacks Trolley","snacks-trolley"],
   ["Service Trolley","service-trolley"],["Onion Bin","onion-bin"],["Potato Bin","potato-bin"],
   ["Waste Collecting Trolley","waste-collecting-trolley"]]},
];

/* ---- Category metadata: icon + one-line blurb for each category card ---- */
const CATMETA={
 "Cooking Equipment":{ico:"i-flame",blurb:"LPG cooking ranges, burners, grills, tandoor & fryers."},
 "Indian Range & Automakers":{ico:"i-pot",blurb:"Steam cooking & automatic dosa / chapati machines."},
 "Food Processing Machinery":{ico:"i-wrench",blurb:"Grinders, peelers, cutters & dough machines."},
 "Tables, Sinks & Racks":{ico:"i-store",blurb:"SS work tables, sinks, dishwash & storage racks."},
 "Dining & Service":{ico:"i-utensils",blurb:"Bain-marie counters, hot cases & dining tables."},
 "Cold Room & Refrigeration":{ico:"i-snow",blurb:"Walk-in cold rooms & worktop freezers."},
 "Trolleys & Storage":{ico:"i-truck",blurb:"Service trolleys, bins & mobile storage."},
};

/* ---- Industries we serve (equipment-needed popups) ---- */
const INDUSTRIES=[
 {icon:"i-factory",title:"Industrial Canteens",
  desc:"High-volume staff & factory canteens that cook hundreds of meals on a tight schedule — built for speed, hygiene and durability.",
  items:["Bulk cooking ranges (multi-burner)","Bulk cookers & tilting bratt pans","Steam cooking / idli steamers","Rice & dhal boiling pans","Hot & cold bain-marie counters","SS work tables & prep benches","Two / three sink dishwashing units","Exhaust hood & fresh-air system","Cold room & refrigeration","Storage racks & trolleys"]},
 {icon:"i-utensils",title:"Hotels & Restaurants",
  desc:"À-la-carte cooking lines for hotels and restaurants — versatile heat sources for Indian, Chinese and continental menus.",
  items:["2 / 3 / 4 burner cooking ranges","Chinese range & continental burners","Tandoor, griller & barbeque","Deep fryer & hot plate / griddle","Bain-marie & pick-up counters","Undercounter & worktop refrigeration","Exhaust hood system","Work tables, sinks & dishwasher","Display & service counters"]},
 {icon:"i-sparkles",title:"Marriage Halls",
  desc:"Bulk catering kitchens for marriage halls and functions — designed to cook for large gatherings in a single service.",
  items:["Bulk cooking ranges & bulk cookers","Tilting bratt pan & kadai","Rice / dhal vessels & steam boiler","Janatha idli plant & idiyappam machine","Chapati making machine","Heavy-duty exhaust system","Bain-marie & food warmers","Washing area & SS storage racks"]},
 {icon:"i-truck",title:"Catering Companies",
  desc:"Event and outdoor catering operations that need portable, transportable equipment that performs anywhere.",
  items:["Portable cooking ranges & burners","Bulk cookers & tilting pans","Mobile bain-marie & hot boxes","Insulated food transport containers","Folding work tables & prep units","Gas bank & manifold systems","Trolleys, racks & carriers"]},
];
