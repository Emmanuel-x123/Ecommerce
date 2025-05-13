import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function ProductListItem({ product }) {
  return (
    <Link href={`/product/${product.id}`} asChild> 
    <Pressable className="flex-1">
    <Card className="p-5 rounded-lg flex-1 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)] xl:w-[calc(25%-10px)]">

      <Image
        source={{ uri: product.image }}
        className="mb-6 h-auto w-full rounded-md aspect-[4/3]"
        alt={`${product.name} image`}
        resizeMode="contain"
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        {product.name}
      </Text>
        <Heading size="md" className="mb-4">
          {product.price}
        </Heading>
    </Card>
    </Pressable>
    </Link>
  );
}

