export function transform(x, y, z) {
    return [
        {translateX: x},
        {translateY: y},
        {scaleX: z},
        {scaleY: z}
    ];
}