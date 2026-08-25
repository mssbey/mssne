import type { Role } from "./session";

export type Permission = "read" | "content:write" | "settings:write" | "users:write" | "audit:read";

const permissions: Record<Role, ReadonlySet<Permission>> = {
  SUPER_ADMIN: new Set(["read", "content:write", "settings:write", "users:write", "audit:read"]),
  EDITOR: new Set(["read", "content:write"]),
  VIEWER: new Set(["read"]),
};

export function hasPermission(role: Role, permission: Permission) {
  return permissions[role].has(permission);
}
