import { Card, Image, Text, Group, Badge, Button, createStyles } from '@mantine/core';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../models/models';
import { AiOutlineShoppingCart } from 'react-icons/ai';
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

const toastHandlerSucces = () => {
   toast.success('Successfully added to cart');
};

const toastHandlerRemove = () => {
   toast.error('U removed product from cart');
};

export default function ProductCard(props: ProductCardProps) {
   const { classes } = useStyles();
   const { product, handleProduct, removeProduct, isInCart } = props;
   const navigate = useNavigate();

   return (
      <Card withBorder radius="md" p="md" className={classes.card}>
         <Card.Section>
            <Image src={product.thumbnail} alt={product.brand} height={190} />
         </Card.Section>

         <Card.Section className={classes.section} mt="md">
            <Group position="apart" className={classes.title}>
               <Text size="lg" weight={500} style={{ width: '170px', lineHeight: '20px' }}>
                  {product.title}
               </Text>
               <Badge size="sm" color="cyan">
                  -{product.discountPercentage}%
               </Badge>
            </Group>
            <Text size="lg" mt="xs" weight={700}>
               {product.price.toLocaleString()}€
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
            <Button.Group w={'100%'}>
               <Button
                  radius="md"
                  size="sm"
                  style={{ flex: 1 }}
                  onClick={() => navigate(`/detail/${product.id}`)}
                  color="dark"
               >
                  See details
               </Button>
               <Button
                  size="sm"
                  color={!isInCart ? 'cyan' : 'pink'}
                  onClick={
                     !isInCart
                        ? () => (handleProduct(product), toastHandlerSucces())
                        : () => (removeProduct(product), toastHandlerRemove())
                  }
               >
                  <AiOutlineShoppingCart size={'80%'} />
               </Button>
            </Button.Group>
         </Group>
      </Card>
   );
}
