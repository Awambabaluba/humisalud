// Auto-reloads the page once when a stale code-split chunk fails to load
// (typically after a redeploy invalidates the cached HTML's chunk hashes).
// A sessionStorage guard prevents reload loops if the failure is not caused
// by stale cache.

const GUARD_KEY = "__chunk_reload_at";
const GUARD_TTL_MS = 30_000;

function isChunkLoadError(message: string): boolean {
  return (
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("Importing a module script failed") ||
    message.includes("error loading dynamically imported module") ||
    /ChunkLoadError/i.test(message)
  );
}

function tryReload() {
  try {
    const prev = Number(sessionStorage.getItem(GUARD_KEY) || 0);
    if (prev && Date.now() - prev < GUARD_TTL_MS) return; // already tried recently
    sessionStorage.setItem(GUARD_KEY, String(Date.now()));
  } catch {
    // sessionStorage unavailable — bail rather than risk a loop
    return;
  }
  window.location.reload();
}

export function installChunkReloadHandler() {
  if (typeof window === "undefined") return;
  const w = window as Window & { __chunkReloadInstalled?: boolean };
  if (w.__chunkReloadInstalled) return;
  w.__chunkReloadInstalled = true;

  window.addEventListener("error", (event) => {
    const msg = event?.message || "";
    if (isChunkLoadError(msg)) tryReload();
  });
  window.addEventListener("unhandledrejection", (event) => {
    const reason = event?.reason;
    const msg =
      (reason && (reason.message || String(reason))) || "";
    if (isChunkLoadError(msg)) tryReload();
  });
}
