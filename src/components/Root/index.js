import React, { useState, useEffect } from 'react'
import { Grid, Typography, TextField, MenuItem, Paper, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core'

export default function Root() {
  const [type, setType] = useState('kg')
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [item, setItem] = useState({})
  const [results, setResults] = useState([{}])

  useEffect(() => {
    if (type === 'kg') {
      let tmp = 0
      items.forEach((el) => {
        tmp += Number(el.qnt)
      })
      console.log(tmp)
      setTotal(tmp)
    }
  }, [items, type])

  useEffect(() => {
    const newResults = [...results]
    for (let index = 0; index < newResults.length; index++) {
      if (newResults[index].result) {
        newResults[index].result = ''
        for (let i = 0; i < items.length; i++) {
          newResults[index].result += `${(items[i].qnt / total) * newResults[index].qnt} ${type} de ${items[i].name}\n`
        }
      }
    }
    setResults(newResults)
  }, [items, total])

  return (
    <Grid container justify="center" style={{ marginTop: '20px' }}>
      <Grid item sm={6}>
        <Typography variant="h5" color="primary">
          Moradia UFF - Distribuição de alimentos ;)
        </Typography>
        <Typography color="primary">Seja bem vindo!</Typography>
        <br />
        <Typography>Qual o tipo de divisão de alimentos deseja fazer?</Typography>
        <br />
        <TextField
          variant="outlined"
          select
          label="Tipo de operação"
          value={type}
          onChange={(e) => {
            setType(e.target.value)
            if (e.target.value === 'items') {
              setTotal(0)
            }
            setItems([])
            setItem({})
            setResults([{}])
          }}
        >
          <MenuItem value="kg">Divisão por Kg</MenuItem>
          <MenuItem value="items">Divisão por items</MenuItem>
        </TextField>
        <br />
        <br />
        {items.length > 0 ? (
          <div>
            <List>
              {items.map((el, index) => (
                <ListItem key={index}>
                  <ListItemText primary={el.name} secondary={`${el.qnt} ${type}`} />{' '}
                  <ListItemSecondaryAction>
                    <Button variant="outlined" onClick={() => setItems(items.filter((el, i) => i !== index))}>
                      Remover
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        ) : null}
        <Typography>Certo, agora adicione os items que deseja dividir e suas respectivas quantidades:</Typography>
        <br />
        <Paper variant="outlined" style={{ padding: '20px', paddingLeft: '0px' }}>
          <TextField variant="outlined" label="Nome do item" type="text" style={{ margin: '8px' }} value={item.name || ''} onChange={(e) => setItem({ ...item, name: e.target.value })} />
          <TextField variant="outlined" label="Quantidade" type="number" style={{ margin: '8px' }} value={item.qnt || ''} onChange={(e) => setItem({ ...item, qnt: e.target.value })} />
          <br />
          <Grid container justify="flex-end">
            <Button
              variant="outlined"
              onClick={() => {
                setItems([...items, item])
                setItem({})
              }}
            >
              Adicionar item
            </Button>
          </Grid>
        </Paper>
        <br />
        {type === 'items' ? (
          <div>
            <Typography>Pra fazer as contas preciso saber tambem quantas pessoas moram atualmente na moradia(total). Quantas sao?</Typography>
            <br />
            <TextField variant="outlined" label="Quantidade de moradores" type="Number" value={total} onChange={(e) => setTotal(Number(e.target.value))} />
            <br />
            <br />
            <Typography>Agora, irei perguntar quantas pessoas moram em cada ala e te direi quantos {type} de cada devem ser enviados :)</Typography>
          </div>
        ) : (
          <Typography>
            Agora, irei perguntar quantos {type} irão para cada ala e te direi quantos {type} de cada devem ser enviados :)
          </Typography>
        )}

        <br />
        {results.map((el, index) => (
          <Paper key={index} variant="outlined" style={{ padding: '20px', paddingLeft: '0px', marginBottom: '10px' }}>
            <Typography style={{ margin: '8px' }} color="primary">
              <b>Ala {index + 1}:</b>
            </Typography>

            <TextField
              variant="outlined"
              label={type === 'items' ? 'Quantidade de pessoas' : 'Quantidade em kg'}
              type="Number"
              style={{ margin: '8px' }}
              value={results[index].qnt || ''}
              onChange={(e) => {
                const newResults = [...results]
                newResults[index].qnt = Number(e.target.value)
                newResults[index].result = ''
                for (let i = 0; i < items.length; i++) {
                  newResults[index].result += `${(items[i].qnt / total) * newResults[index].qnt} ${type} de ${items[i].name}\n`
                }
                setResults(newResults)
              }}
            />
            <br />
            {results[index].result ? (
              <Typography style={{ margin: '8px' }}>
                <b>Esta ala deve receber: {results[index].result}</b>
              </Typography>
            ) : null}
          </Paper>
        ))}
        <br />
        <Button variant="outlined" onClick={() => setResults([...results, {}])}>
          Adicionar ala
        </Button>
      </Grid>
    </Grid>
  )
}
