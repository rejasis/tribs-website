# Higgsfield prompts for the TRIBS site

## Setup (once)
1. Switch the prompt box to **Image** mode (not Video).
2. Model: **Nano Banana Pro**, resolution 2k.
3. Add `assets/logos/tribs-emblem-on-white.png` under References and attach it to every generation.
4. Set the aspect ratio shown for each image below.
5. Paste one prompt block per generation. Each block is complete on its own.

When all are done, say so and they will be pulled from your history, cropped and placed into `assets/photos/`.

## 1. service-repair.jpg — aspect ratio 21:9
```
Photorealistic commercial photograph. A Filipino mechanic in a dark green work shirt with the attached round TRIBS gear emblem on the chest leans into the open engine bay of a white van inside a tidy, well-lit repair bay in Metro Manila. Tools on a cart, shallow depth of field, natural daylight through the shop door. Wide banner composition. Clean and modern, no text overlays, no watermark.
```

## 2. service-truck.jpg — aspect ratio 21:9
```
Photorealistic commercial photograph. Three dark green (#07582a) closed vans and wing-van trucks lined up at a concrete depot yard in Metro Manila early in the morning, each with the attached round TRIBS gear emblem painted on the side. Drivers in green shirts walking toward them, soft morning light, wide banner composition. Clean and modern, no other text on the vehicles, no watermark.
```

## 3. service-delivery.jpg — aspect ratio 21:9
```
Photorealistic commercial photograph. A delivery rider in a dark green jacket and helmet on a green motorbike with a green insulated delivery box bearing the attached round TRIBS gear emblem, handing a parcel to a smiling shop owner at a small storefront in Parañaque City, Philippines. Warm morning light, wide banner composition. Clean and modern, no text overlays, no watermark.
```

## 4. hero-fleet.jpg — aspect ratio 3:2 (optional, replaces the hero on every page)
```
Photorealistic commercial photograph. A dark green (#07582a) TRIBS box truck with the attached round gear emblem on its side drives along an elevated highway with the Manila skyline behind it, a delivery rider on a green motorbike with a green delivery box alongside. Late afternoon light, slight motion blur on the road, wide cinematic composition with open sky on the left for headline text. No text overlays, no watermark.
```

## Update: white trucks (edit the existing photos)

Model: Nano Banana Pro (or Nano Banana 2), image-to-image. Attach the current photo as
the first reference and `assets/logos/tribs-emblem-on-white.png` as the second. Masters
to attach are in `assets/originals/higgsfield/` (`hero.jpg`, `truck.jpg`).

### Hero (3:2) — reference: hero.jpg + emblem

```
Edit the first reference photo. Keep the exact same scene, camera angle, composition, lighting, road, bridge, bay, city skyline and the motorcycle rider: only change the box truck's paint. Repaint the entire truck WHITE: white cab, white box body, white bumper. Keep the truck's shape, model and position identical. On the side of the white box body place the round TRIBS emblem from the second reference exactly as designed (dark green gear ring, three red stars, serif TRIBS wordmark, EST. 2004) in dark green on the white panel, large and clean, plus a small dark green TRIBS emblem on the cab door. Realistic vinyl livery, correct perspective, natural reflections of the golden-hour light on the white paint. The motorcycle, rider uniform and delivery box stay dark green as in the reference. Photorealistic editorial photograph, Manila, Philippines, no extra text.
```

### Truck for Hire card (21:9) — reference: truck.jpg + emblem

```
Edit the first reference photo. Keep the exact same scene, camera angle, composition, lighting, warehouse yard, buildings, sky and the three staff members in dark green polo shirts: only change the vehicles' paint. Repaint all three vehicles WHITE: the closed van, and both box trucks, including cabs, box bodies and bumpers. Keep each vehicle's shape, model and position identical. On the side of each white box body place the round TRIBS emblem from the second reference exactly as designed (dark green gear ring, three red stars, serif TRIBS wordmark, EST. 2004) in dark green on the white panel, large and clean; the van gets a smaller dark green TRIBS emblem on its side. Realistic vinyl livery, correct perspective, natural reflections of the late-afternoon light on the white paint. Photorealistic editorial photograph, Metro Manila, Philippines, no extra text.
```

After generating, save the results over `assets/originals/higgsfield/hero.jpg` and
`truck.jpg`, then regenerate the web sizes (1600/800 for the hero, 1200/600 for the card).
