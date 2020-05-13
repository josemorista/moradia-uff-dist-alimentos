import React, { useState, useEffect } from 'react'
import { Grid, Typography, TextField, MenuItem, Paper, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core'

export default function Root() {
  const [type, setType] = useState('kg')
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [item, setItem] = useState({})
  const [decimals, setDecimals] = useState(2)
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
      if (newResults[index].result && newResults[index].result.length > 0) {
        newResults[index].result = []
        for (let i = 0; i < items.length; i++) {
          newResults[index].result.push(`${((items[i].qnt / total) * newResults[index].qnt).toFixed(decimals)} ${type} de ${items[i].name}`)
        }
      }
    }
    setResults(newResults)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, total, decimals])

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
          style={{ margin: '8px', marginLeft: '0px' }}
          select
          label="Tipo de operação"
          value={type}
          onChange={(e) => {
            setType(e.target.value)
            if (e.target.value === 'itens') {
              setTotal(0)
            }
            setItems([])
            setItem({})
            setResults([{}])
          }}
        >
          <MenuItem value="kg">Divisão por Kg</MenuItem>
          <MenuItem value="itens">Divisão por itens</MenuItem>
        </TextField>
        <TextField
          variant="outlined"
          label="Precisão"
          style={{ margin: '8px', maxWidth: '70px' }}
          type="Number"
          value={decimals}
          onChange={(e) => {
            let tmp = Number(e.target.value)
            if (tmp < 0) {
              tmp = 0
            }
            if (tmp > 6) {
              tmp = 6
            }
            setDecimals(tmp)
          }}
        />
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
        <Typography>Certo, agora adicione os itens que deseja dividir e suas respectivas quantidades:</Typography>
        <br />
        <Paper variant="outlined" style={{ padding: '20px', paddingLeft: '0px' }}>
          <TextField variant="outlined" label="Nome do item" type="text" style={{ margin: '8px' }} value={item.name || ''} onChange={(e) => setItem({ ...item, name: e.target.value })} />
          <TextField variant="outlined" label={'Quantidade em ' + type} type="number" style={{ margin: '8px' }} value={item.qnt || ''} onChange={(e) => setItem({ ...item, qnt: e.target.value })} />
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
        {type === 'itens' ? (
          <div>
            <Typography>Para fazer as contas, preciso saber tambem quantas pessoas moram atualmente na moradia(total). Quantas são?</Typography>
            <br />
            <TextField variant="outlined" label="Quantidade de moradores" type="Number" value={total} onChange={(e) => setTotal(Number(e.target.value))} />
            <br />
            <br />
            <Typography>Agora, irei perguntar quantas pessoas moram em cada ala e informarei quantos {type} de cada devem ser enviados :)</Typography>
          </div>
        ) : (
          <Typography>
            Agora, irei perguntar quantos {type} irão para cada ala e informarei quantos {type} de cada item devem ser enviados :)
          </Typography>
        )}

        <br />
        {results.map((el, index) => (
          <Paper key={index} variant="outlined" style={{ padding: '20px', paddingLeft: '0px', marginBottom: '10px' }}>
            <Typography style={{ margin: '8px' }}>
              <b>Ala {index + 1}:</b>
            </Typography>

            <TextField
              variant="outlined"
              label={type === 'itens' ? 'Quantidade de pessoas' : 'Quantidade em kg'}
              type="Number"
              style={{ margin: '8px' }}
              value={results[index].qnt || ''}
              onChange={(e) => {
                const newResults = [...results]
                newResults[index].qnt = Number(e.target.value)
                newResults[index].result = []
                for (let i = 0; i < items.length; i++) {
                  newResults[index].result.push(`${((items[i].qnt / total) * newResults[index].qnt).toFixed(decimals)} ${type} de ${items[i].name}`)
                }
                setResults(newResults)
              }}
            />
            <br />
            {results[index].result ? (
              <div>
                <Typography style={{ margin: '8px' }}>
                  <b>Esta ala deve receber:</b>
                </Typography>
                <br />
                <ul>
                  {results[index].result.map((el, index) => (
                    <li key={index}> {el} </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Paper>
        ))}
        <br />
        <Button variant="outlined" onClick={() => setResults([...results, {}])} style={{ marginBottom: '10px' }}>
          Adicionar ala
        </Button>
      </Grid>
    </Grid>
  )
}
