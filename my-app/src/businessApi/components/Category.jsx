import Business from './Business'
import { Grid } from '@mui/material'
const Category = ({data}) => {
  console.log(data)
  return (
    
    <>
    <h1>Category </h1>
    <Grid container spacing={2} >
      {data.map((bs) => {
        return <Grid item xs={3}> 
          <Business data={bs} key={bs.id}/> 
        </Grid>
      })}
    </Grid>

    </>
  )
}

export default Category