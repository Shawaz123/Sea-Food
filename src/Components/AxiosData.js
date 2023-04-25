import React,{useState,useEffect} from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from 'axios'
 
 
 function AxiosData() {
  const [meal,setMeals] = useState([])
  const baseUrl ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

  useEffect(()=>{
    axios.get(`${baseUrl}`).then((response)=>{
      console.log(response)
      setMeals(response.data.meals)
    })
  },[])
   return (
     
     

        <Container className='my-2'>
        <Row className='my-2'>
          <h1 className='text-center'>Sea Food Store</h1>
            {meal.map((data) => (
                <Col key={data.idMeal} xs={12} md={4} lg={3}>
                    <Card className='my-4' >
                        <Card.Img src={data.strMealThumb} />

                        <Card.Body>
                            <Card.Title>{data.strMeal.slice(0,15)}</Card.Title>
                            <Card.Text>{data.strMeal}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
     
   )
 }
 
 export default AxiosData
 