import { describe, expect, it } from 'vitest';
import { images, rooms, propertyGallery, blogImages } from '@/lib/guesthouse';

describe('Guest-house photo and price update', () => {
  it('retains the existing room choices and keeps sample rates at or below the cap', () => {
    expect(rooms.map(room => room.name)).toEqual(['Standard Room', 'Deluxe Room', 'Family Room']);
    expect(rooms.every(room => room.price > 0 && room.price <= 250)).toBe(true);
    expect(Math.max(...rooms.map(room => room.price))).toBe(250);
    expect(new Set(rooms.map(room => room.image)).size).toBe(3);
  });
  it('uses owner photos for buildings, rooms, and pool while retaining blog inspiration', () => {
    for (const image of [images.exterior, images.room, images.pool]) {
      expect(image).toContain('/__l5e/assets-v1/');
    }
    expect(blogImages.exterior).not.toBe(images.exterior);
    expect(blogImages.conference).not.toBe(images.conference);
    expect(propertyGallery.filter(photo => photo[2] === 'Rooms')).toHaveLength(5);
    expect(propertyGallery.filter(photo => photo[2] === 'Conference')).toHaveLength(3);
    expect(propertyGallery.filter(photo => photo[2] === 'Dining' && !photo[0]?.includes('illustrative'))).toHaveLength(3);
  });
  it('categorizes interior photographs correctly and retains original pub and meeting photos', () => {
    expect(propertyGallery.find(photo => photo[0] === 'Guest-room corridor')?.[2]).toBe('Rooms');
    expect(images.restaurant).toContain('/__l5e/assets-v1/');
    expect(images.conference).toContain('/__l5e/assets-v1/');
  });
});