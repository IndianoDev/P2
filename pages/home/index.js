import Pagina from '@/components/Pagina'
import React from 'react'
import styles from "../../styles/index.module.css";
import { Alert, Button, Card, Carousel, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';
import { TfiAgenda  } from "react-icons/tfi";
import { Chart } from "react-google-charts";

const index = () => {

const data = [
    ["Ano", "Alunos formados", "Alunos na graduação" ],
    ["2019", 1000, 400 ],
    ["2020", 1170, 460 ],
    ["2021", 660, 1120 ],
    ["2022", 1030, 540 ],
  ];
 
  const options = {
    chart: {
      title: "Quantidade de alunos",
      subtitle: "pesquisa realizada entre : 2019-2022 ",
    },
  };


  return (
    <div className={styles.cover}>

      <Pagina>
        <Carousel>
          <Carousel.Item>
            <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
              <img
                className=""
                src="https://www.udf.edu.br/wp-content/uploads/2023/05/20230515_CSED-ENata-UDF-202302v3-Seletivo-BannerHome_d.jpg"
                alt="First slide"
                style={{ width: '900px', }}

              />
            </Row>
            <Carousel.Caption>

              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
              <img
                className='center'
                src="https://www.udf.edu.br/wp-content/uploads/2020/05/486x346.jpg"
                alt="Second slide"
                style={{ width: '800px', }}
              />
            </Row>
            <Carousel.Caption>
              <h3>Campus 4R</h3>
              <p>SGAS 903 Conj. D, Lote 79 Asa Sul – Brasilia CEP 70390-030</p>

            </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item>

            <img

              src="https://static.wixstatic.com/media/368834_5abd7ee2baca4091864e207d8bc4a43b~mv2.png/v1/fit/w_710%2Ch_315%2Cal_c%2Cq_80,enc_auto/file.jpg"
              alt="Third slide"
              style={{ width: '1100px', }}
            />

            <Carousel.Caption>
              <h3>Nosso Campus Asa Sul</h3>
              <p>

              </p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
    
        <br>



        </br>
        <Alert variant="primary">
          <Alert.Heading>Quem escolheu o UDF, amou sua experiência universitária.</Alert.Heading>
          <p>
            Aqui no UDF a jornada acadêmica é completa e repleta de experiências. Nossos alunos são motivo de orgulho e satisfação, pois eles são espelhos da excelência de nossos cursos.
          </p>
          <hr />
          <p className="mb-0">

          </p>
        </Alert>
        <br>
        </br>

        <p>O campus é o local onde você passará grande parte do seu tempo durante os anos de sua graduação.

          Por isso, ele tem que possuir todas as condições para que você vivencie a experiência universitária ao máximo.

          Então, nada melhor do que aliar seus estudos a lugares amplos e com uma infraestrutura que só o UDF te oferece.

          Abriga com conforto todos os cursos oferecidos pelo UDF.

          São mais de 28 mil m² construídos, incluindo laboratórios que contam com ambientes e aparelhos altamente sofisticado, clínicas e núcleos, todos inclusive seguindo as normas de acessibilidade, com rampas, elevadores e sanitários adaptados.

        </p>
        <br>
        </br>

        <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
          <Card style={{ width: '25rem' }}>



            <Card.Img variant="top" src="https://www.udf.edu.br/wp-content/uploads/2019/10/udf_2020_nossas_unidades.jpg" />
            <Card.Body>
              <Card.Title>Campus Sede</Card.Title>
              <Card.Text>
              O campus está muito bem localizado, próximo a meios de transporte público e conta com mais de 30 mil m² construídos – que incluem laboratórios, clínicas, núcleos, webclass com 110 lugares, uma biblioteca com títulos atualizados, além dos aparelhos mais modernos do mercado – para proporcionar plena formação aos alunos, atender as necessidades acadêmicas, e prestar os melhores serviços à comunidade.
              </Card.Text>
              <Button variant="primary">
              <Link href='https://www.udf.edu.br/o-udf/nossas-unidades/#'>
              <TfiAgenda className='text-white me-2'/>
            </Link>Agende sua visita</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '25rem' }} className='ms-3'>
            <Card.Img variant="top" src="https://www.udf.edu.br/wp-content/uploads/2020/05/486x346.jpg" />
            <Card.Body>
              <Card.Title>Campus 4R</Card.Title>
              <Card.Text>
              O campus está muito bem localizado, próximo a meios de transporte público e conta com mais de 8 mil m² construídos – que incluem laboratórios multidisciplinares, clínicas, núcleos, uma biblioteca com títulos atualizados, além dos aparelhos mais modernos do mercado – para proporcionar plena formação aos alunos, atender as necessidades acadêmicas, e prestar os melhores serviços à comunidade.
              </Card.Text>
              <Button variant="primary">
                <Link href='https://www.udf.edu.br/o-udf/nossas-unidades/#'>
                <TfiAgenda className='text-white me-2'/>
                </Link>Agende sua visita</Button>
            </Card.Body>

          </Card>
        </Row>

<br>
</br>
        <h2 className='text-center bg-primary text white  py-3 mb-3'> Quantidade de alunos</h2>
<br>
</br>
         <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />

    <br>
    </br>
 
      </Pagina>

    </div>
  )
}


export default index