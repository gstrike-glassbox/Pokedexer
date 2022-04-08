export function getValueUsingStringKey<Type>(arg: Type, key: string) {
    return arg[key as unknown as keyof typeof arg];
}
   