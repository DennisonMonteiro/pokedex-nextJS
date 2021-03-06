export interface Weakness {
    damage_relations: {
        name: string,
        double_damage_from: [
            {
                name: string,
                url: string,
            },
        ],
        double_damage_to: [
            {
                name: string,
                url: string,
            },
        ],
        half_damage_from: [
            {
                name: string,
                url: string,
            },
        ],
        half_damage_to: [
            {
                name: string,
                url: string,
            },
        ],
        no_damage_from: [
            {
                name: string,
                url: string,
            },
        ],
        no_damage_to: [
            {
                name: string,
                url: string,
            },
        ],
    },
}