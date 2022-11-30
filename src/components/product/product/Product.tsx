import { Card, Image, Text, Group, Badge, Button, createStyles } from '@mantine/core';
import { Product } from '../../../models/models';

const useStyles = createStyles((theme) => ({
   card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      width: '300px',
      margin: '20px',
      boxShadow: ' rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
      fontFamily: 'revert',
   },

   section: {
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      paddingBottom: theme.spacing.md,
      height: '120px',
      overflowY: 'hidden',
   },

   title: {
      width: '260px',
      height: '60px',
   },

   like: {
      color: theme.colors.red[6],
   },

   label: {
      textTransform: 'uppercase',
      fontSize: theme.fontSizes.xs,
      fontWeight: 700,
   },
}));
type ProductCardProps = {
   product: Product;
   handleProduct: (product: Product) => void;
   removeProduct: (product: Product) => void;
   isInCart: boolean;
};

export default function ProductCard(props: ProductCardProps) {
   const { classes } = useStyles();
   const { product, handleProduct, removeProduct, isInCart } = props;

   return (
      <Card withBorder radius="md" p="md" className={classes.card}>
         <Card.Section>
            <Image src={product.thumbnail} alt={product.brand} height={190} />
         </Card.Section>

         <Card.Section className={classes.section} mt="md">
            <Group position="apart" className={classes.title}>
               <Text size="lg" weight={500} style={{ width: '180px' }}>
                  {product.title}
               </Text>
               <Badge size="sm" color="dark">
                  -{product.discountPercentage}%
               </Badge>
            </Group>
            <Text size="md" mt="xs" weight={700}>
               {product.price}€
            </Text>
         </Card.Section>

         <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} color="dimmed">
               Strongly recomended!
            </Text>
            <Group spacing={7} mt={5}>
               {product.description}
            </Group>
         </Card.Section>

         <Group mt="xs">
            {!isInCart ? (
               <Button radius="md" style={{ flex: 1 }} onClick={() => handleProduct(product)} color="dark">
                  Add to Cart
               </Button>
            ) : (
               <Button
                  radius="md"
                  style={{ flex: 1 }}
                  onClick={() => removeProduct(product)}
                  color="dark"
                  variant="light"
               >
                  Remove from cart
               </Button>
            )}
         </Group>
      </Card>
   );
}
