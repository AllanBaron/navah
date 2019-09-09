import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../../../../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Todos os Produtos" subtitle="Home / Produtos" className="text-sm-left" />
    </Row>

    {/* Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nome
                  </th>
                  <th scope="col" className="border-0">
                    Categorias
                  </th>
                  <th scope="col" className="border-0">
                    Preço
                  </th>
                  <th scope="col" className="border-0">
                    Qtd. Estoque
                  </th>
                  <th scope="col" className="border-0">
                    Desconto
                  </th>
                  <th scope="col" className="border-0">
                    Ação
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Notebook Aspire 3 Core i3/4GB/1TB/Win10 Tela 15,6" Acer - Preto</td>
                  <td>Notebooks</td>
                  <td>2.699,90</td>
                  <td>100</td>
                  <td>Sem Desconto</td>
                  <td>
                    <Link to="/produtos/editar/2">
                      <i class="material-icons">edit</i>
                    </Link>
                    <i class="material-icons">delete</i>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Notebook Aspire 3 Core i3/4GB/1TB/Win10 Tela 15,6" Acer - Preto</td>
                  <td>Notebooks</td>
                  <td>2.699,90</td>
                  <td>100</td>
                  <td>Sem Desconto</td>
                  <td>
                    <Link to="/produtos/editar/2">
                      <i class="material-icons">edit</i>
                    </Link>
                    <i class="material-icons">delete</i>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
);

export default Tables;
