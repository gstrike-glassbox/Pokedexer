// Generic Resource type, used across multiple other interfaces.
// For example: type {name: "grass", category: "type", id: 12}, move: {name: "swords-dance", category: "move", id: 14}
export interface NamedApiResource {
    name: string;
    category: string;
    id: number;
}