import { FC, useEffect } from 'react'
import { Drawer, Typography, IconButton, Button, MenuItem, InputAdornment } from '@mui/material'
import { Close } from '@mui/icons-material'
import { css } from '@emotion/react'
import { useForm, useFieldArray } from 'react-hook-form'

import { ControlledSelect, ControlledTextField } from '../../../../components'

import { pizzaSizesMock } from './mock'
import { PizzaSizes } from './utils'

const useStyles = () => {
  const styles = {
    header: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }),

    main: css({
      height: '100%',
      overflow: 'auto',
    }),

    drawer: css({
      width: '33.333%',

      '& .MuiDrawer-paper': {
        width: '33.333%',
        boxSizing: 'border-box',
      },
    }),

    footer: css({}),
  }

  return { styles }
}

interface IItemType {
  name: string
  value: string
}
const itemTypes: IItemType[] = [
  { name: 'Pizza', value: 'PIZZA' },
  { name: 'Bebida', value: 'BEVERAGE' },
]

const pizzaCategory = [{ category: 'Salgada' }, { category: 'Doce' }]

interface teste {
  price: string
  size: PizzaSizes
}

const ProductListForm: FC = () => {
  const { styles } = useStyles()
  const methods = useForm({
    defaultValues: {
      title: '',
      type: '',
      category: '',
      prices: [] as teste[],
    },
  })

  const prices = useFieldArray({ control: methods.control, name: 'prices' })

  const currentCategory = methods.watch('type')
  const hasCategory = currentCategory !== ('' && null && undefined)

  useEffect(() => {
    if (prices.fields.length >= pizzaSizesMock.length) return

    pizzaSizesMock.map(size => prices.append({ price: '', size: size.size }))
  }, [prices])

  return (
    <Drawer open anchor='right' css={styles.drawer}>
      <header css={styles.header}>
        <Typography variant='h5' component='h1'>
          Cadastro de Produtos
        </Typography>

        <IconButton>
          <Close />
        </IconButton>
      </header>

      <main css={styles.main}>
        <form onSubmit={methods.handleSubmit(values => console.log(values))} id='teste'>
          {/* Tipo do Produto */}
          <ControlledSelect name='type' control={methods.control} label='Tipo' required>
            {itemTypes.map((itemType, index) => (
              <MenuItem key={`type-${index}`} value={itemType.value}>
                {itemType.name}
              </MenuItem>
            ))}
          </ControlledSelect>

          {/* Nome do Produto */}
          <ControlledTextField
            name='title'
            control={methods.control}
            label='Nome do Produto'
            required
          />

          {/* Categoria - Pizzas */}
          <ControlledSelect
            name='category'
            control={methods.control}
            label='Categoria'
            required
            disabled={!hasCategory}
          >
            {currentCategory === 'PIZZA' &&
              pizzaCategory.map((category, index) => (
                <MenuItem key={`type-${index}`} value={category.category}>
                  {category.category}
                </MenuItem>
              ))}
          </ControlledSelect>

          {currentCategory === 'PIZZA' &&
            pizzaSizesMock.map((size, index) => (
              <ControlledTextField
                key={index}
                name={`prices.${index}.price`}
                label={`Preço ${size.label}`}
                control={methods.control}
                textFieldProps={{
                  InputProps: {
                    startAdornment: <InputAdornment position='start'>R$</InputAdornment>,
                  },
                }}
              />
            ))}
        </form>
      </main>

      <footer css={styles.footer}>
        <Button type='submit' form='teste'>
          Salvar
        </Button>
        <Button>Fechar</Button>
      </footer>
    </Drawer>
  )
}

export default ProductListForm
