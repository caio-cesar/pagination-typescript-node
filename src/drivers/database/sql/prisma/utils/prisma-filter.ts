export type Filter = {
    [key: string]: any
}

export class PrismaFilter {
    filter: Filter = {}

    addLikeFilter(field: string, value: string): PrismaFilter {
        this.filter[field] = {
            contains: value,
            mode: 'insensitive'
        }
        return this
    }

    addLikeFilterForStringFields(input: any): PrismaFilter {
        Object.keys(input).forEach(key => {
            if (input[key] && typeof input[key] === 'string') 
                this.addLikeFilter(key, input[key])
        })
        return this
    }

    build(): Filter {
        return this.filter
    }
    
}