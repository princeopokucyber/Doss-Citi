// This public asset origin serves immutable photo URLs outside Lovable too.
const publicAssetOrigin = 'https://4150e7ce-29b4-4659-af90-1195ac253470.lovableproject.com';

export function photoUrl(asset: { url: string }): string {
  return new URL(asset.url, publicAssetOrigin).href;
}