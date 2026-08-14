export const SERVICES = [
  {
    id: "minecraft",
    name: "Minecraft Server",
    status: "online",
    detail: "Accepting connections",
    items: [
      { label: "Address", value: "play.zalioraxmc.net" },
      { label: "Version", value: "1.21.x" },
      { label: "Players online", value: "127" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "website",
    name: "Website",
    status: "operational",
    detail: "All systems running",
    items: [
      { label: "Status", value: "Operational" },
      { label: "Last update", value: "12 minutes ago" },
      { label: "Response time", value: "142 ms" },
    ],
  },
  {
    id: "store",
    name: "Store",
    status: "maintenance",
    detail: "Under maintenance",
    items: [
      { label: "Status", value: "Maintenance" },
      { label: "Expected", value: "Coming soon" },
      { label: "Purchases", value: "Temporarily paused" },
    ],
  },
  {
    id: "discord",
    name: "Discord",
    status: "operational",
    detail: "Community online",
    items: [
      { label: "Status", value: "Operational" },
      { label: "Members", value: "2,400+" },
      { label: "Support", value: "Available" },
    ],
  },
]

export const STATUS_META = {
  online: { label: "Online", color: "text-emerald-400", dot: "bg-emerald-400", glow: "shadow-emerald-500/40" },
  operational: { label: "Operational", color: "text-emerald-400", dot: "bg-emerald-400", glow: "shadow-emerald-500/40" },
  maintenance: { label: "Maintenance", color: "text-amber-400", dot: "bg-amber-400", glow: "shadow-amber-500/40" },
  offline: { label: "Offline", color: "text-mist-400", dot: "bg-mist-400", glow: "shadow-transparent" },
}
