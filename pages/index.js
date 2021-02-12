// Página renderizando Home renderizando junto ao servidor

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <title>FSELETRO</title>
      </Head>
      <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="/" to="/">
                    <img src="./images/logo.png" alt="logo"  /> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                    <Nav className="d-flex justify-content-around w-100 bg-danger">
                        <Nav.Item>
                            <strong><Nav.Link  className="text-white" href="#" to="/produtos">PRODUTOS</Nav.Link></strong>
                        </Nav.Item>
                        <Nav.Item>
                        <strong><Nav.Link  className="text-white" href="#" to="/contatos" >CONTATO</Nav.Link></strong>
                        </Nav.Item>
                        <Nav.Item>
                        <strong><Nav.Link  className="text-white" href="#" to="/pedidos">PEDIDOS</Nav.Link></strong>
                        </Nav.Item>
                        <Nav.Item>
                        <strong><Nav.Link  className="text-white" href="#" to="/lojas">LOJAS</Nav.Link></strong>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        

          <section className={styles.sectionHome}>
                <div className={styles.bannerHome}>
                  <img className={styles.bannerHomeimg} src="./images/banner.jpg" alt="banner"  />
                  <div className={styles.bannerHomediv}>
                      <h1 className={styles.bannerHomeh1}>BEM VINDOS A NOSSA LOJA!</h1>
                      <p>Aqui é barato mesmo!</p>
                  </div>
                </div>
          </section>

       
        <footer className={styles.footer}>
              <div className={styles.formasPgto}>
                  <h4 >Formas de pagamento </h4>
                  <img src='./images/formas-pgto.png' alt="formas de pagamento" />
              </div>
        </footer>
      </Container>
    </div>
  )
}
