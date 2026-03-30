import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card"

export default function ProductCard({ product }: { product: Product }) {
    const discountedPrice =
        product.price - (product.price * product.discountPercentage / 100)

    return (
        <Card className="w-full max-w-sm rounded-2xl shadow-sm hover:shadow-lg transition">
            
            {/* Image */}
            <div className="aspect-square overflow-hidden rounded-t-2xl">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <CardContent className="p-4 space-y-3">
                
                {/* Title + Brand */}
                <div>
                    <h2 className="text-lg font-semibold line-clamp-1">
                        {product.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {product.brand}
                    </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                    {product.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="secondary">
                            #{tag}
                        </Badge>
                    ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">
                        ${discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-sm line-through text-muted-foreground">
                        ${product.price}
                    </span>
                    <Badge variant="destructive">
                        -{product.discountPercentage}%
                    </Badge>
                </div>

                {/* Rating + Stock */}
                <div className="flex justify-between text-sm">
                    <span>⭐ {product.rating}</span>
                    <span
                        className={
                            product.stock > 0
                                ? "text-green-600"
                                : "text-red-500"
                        }
                    >
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                </div>

                {/* Dimensions */}
                <div className="text-xs text-muted-foreground">
                    {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                </div>

                {/* Review */}
                {product.reviews.length > 0 && (
                    <div className="border-t pt-2 text-xs">
                        <p className="font-medium">Latest review:</p>
                        <p className="text-muted-foreground line-clamp-2">
                            "{product.reviews[0].comment}"
                        </p>
                        <p className="text-muted-foreground">
                            - {product.reviews[0].reviewerName}
                        </p>
                    </div>
                )}
            </CardContent>

            <CardFooter className="p-4 pt-0 flex gap-2">
                <Button className="w-full">Add to Cart</Button>
                <Button variant="outline" className="w-full">
                    View
                </Button>
            </CardFooter>
        </Card>
    )
}