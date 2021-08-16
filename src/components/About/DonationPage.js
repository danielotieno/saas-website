import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// markup
const DonationPage = () => {
  return (
    <section className='event-details pt-120'>
      <Container>
        <Row>
          <Col>
            <h3 className='mb-2'>Support Our Work</h3>
            <p>
              SAAS requires your support in order to continue providing
              education to deserving children in Mombasa. In addition to
              providing support direct to the student SAAS runs an office in
              Kongowea in Mombasa which we need to fund. We are delighted to
              receive any amount that you can spare to help us run the
              organisation. You can donate money to the organisation by lodging
              a single payment to the SAAS bank account (details below), by
              setting up a direct debit, or by donating via JustGiving using
              your credit / debit card by clicking on the image below.
            </p>
            <p className='mb-4 text-center'>
              <a href='//widgets.justgiving.com/Button/Redirect?p=eyJUZXh0IjoiU0FBUyIsIklkIjoiYTY3MTY1MjYtMWVmOC00Y2Y1LWFiZjItZDc3ZDZlZmVmYjMyIiwiQ2hhcml0eUlkIjozMDY0MjE1LCJTaXplIjoicyIsIlJlZmVyZW5jZSI6IiIsIlR5cGUiOiJDaGFyaXR5RG9uYXRlIn0='>
                <img src='//widgets.justgiving.com/Button?p=eyJUZXh0IjoiU0FBUyIsIklkIjoiYTY3MTY1MjYtMWVmOC00Y2Y1LWFiZjItZDc3ZDZlZmVmYjMyIiwiQ2hhcml0eUlkIjozMDY0MjE1LCJTaXplIjoicyIsIlJlZmVyZW5jZSI6IiIsIlR5cGUiOiJDaGFyaXR5RG9uYXRlIn0=' />
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className='mt-4 mb-2'>Sponsor a Student</h3>
            <p className='pb-40'>
              SAAS requires your support in order to continue providing
              education to deserving children in Mombasa. School fees cost €420
              per year (€35 a month) / £360 per year (£30 a month / £1 a day),
              however,you can co-sponsor a student with a smaller donation €10,
              €15 or €20 a month, we have so many students needing sponsorship,
              every € helps. We are delighted to receive any amount that you can
              spare.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <h3 className='mb-2'>Donate using JustGiving</h3>
            <p>You can donate money to the organisation by:</p>
            <p>
              Donating via JustGiving using your credit / debit card by clicking
              on the JustGiving image below and selecting a single €420 payment
              or monthly €35 payment or any amount you can afford
            </p>
            <p>
              <a href='//widgets.justgiving.com/Button/Redirect?p=eyJJZCI6IjdjYmJkMTgxLTcwMzUtNDM2MC04NTNmLWZkYjJmYjg2OGM5MCIsIkNoYXJpdHlJZCI6MzA2NDIxNSwiU2l6ZSI6InMiLCJSZWZlcmVuY2UiOiIiLCJUeXBlIjoiRG9uYXRlIn0='>
                <img src='//widgets.justgiving.com/Button?p=eyJJZCI6IjdjYmJkMTgxLTcwMzUtNDM2MC04NTNmLWZkYjJmYjg2OGM5MCIsIkNoYXJpdHlJZCI6MzA2NDIxNSwiU2l6ZSI6InMiLCJSZWZlcmVuY2UiOiIiLCJUeXBlIjoiRG9uYXRlIn0=' />
              </a>
            </p>
          </Col>
          <Col md={12} lg={6}>
            <h3 className='mb-2'>Donate Using Bank</h3>
            <p>
              Lodging a single payment to the SAAS bank account (details below)
            </p>
            <p>
              Sponsor An African Scholar, Bank of Ireland, Montrose Place,
              Dublin 4 <br />
              <strong>Sort Code:</strong> 90 13 51 <br />{' '}
              <strong>Account:</strong> 27871287 <br />
              <strong>IBAN:</strong> IE55 BOFI 9013 5127 8712 87 <br />
              <strong>BIC:</strong> BOFIIE2D
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationPage;
