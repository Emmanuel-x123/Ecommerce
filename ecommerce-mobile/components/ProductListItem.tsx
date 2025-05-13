import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function ProductListItem({ product }) {
  return (
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
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          {product.price}
        </Heading>
        <Text size="sm" className="line-clamp-2">
          {product.description}
        </Text>
      </VStack>
      <Box className="flex-col sm:flex-row justify-between">
        <Button className="px-4 py-2 mb-3 sm:mb-0 sm:flex-1">
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button variant="outline" className="px-4 py-2 border-outline-300 sm:flex-1">
          <ButtonText size="sm" className="text-typography-600">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );
}

