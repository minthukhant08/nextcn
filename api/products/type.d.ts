type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    tags: string[],
    dimensions: Dimensions,
    reviews: Review[],
    thumbnail: string,
    images: string[]
}

type Dimensions = {
    width: number,
    height: number,
    depth: number
}

type Review = {
    rating: number,
    comment: string,
    reviewerName: string    
    reviewerEmail: string
}


type ProductResponse = {
    products: Product[]
}