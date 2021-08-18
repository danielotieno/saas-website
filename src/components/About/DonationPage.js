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
              <a
                href='https://link.justgiving.com/v1/charity/donate/charityId/3064215?tipScheme=TipJar2.1&reference=givingcheckout_tj21'
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src='//widgets.justgiving.com/Button?p=eyJUZXh0IjoiU3BvbnNvciBhbiBBZnJpY2FuIFNjaG9sYXIgKFNBQVMpIiwiSWQiOiJhMWQ5YzRiNS1iZWM4LTQ1YzctODI5Ny1hZWNkYTU2YzE3YWUiLCJDaGFyaXR5SWQiOjMwNjQyMTUsIlNpemUiOiJzIiwiUmVmZXJlbmNlIjoiIiwiVHlwZSI6IkNoYXJpdHlEb25hdGUifQ=='
                  alt='Donation'
                />
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
              per year (€35 a month) / £360 per year (£30 a month / £1 a day).
              However, you can co-sponsor a student with a smaller donation €10,
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
              <a
                href='https://link.justgiving.com/v1/charity/donate/charityId/3064215?tipScheme=TipJar2.1&reference=givingcheckout_tj21'
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src='//widgets.justgiving.com/Button?p=eyJUZXh0IjoiU3BvbnNvciBhbiBBZnJpY2FuIFNjaG9sYXIgKFNBQVMpIiwiSWQiOiJhMWQ5YzRiNS1iZWM4LTQ1YzctODI5Ny1hZWNkYTU2YzE3YWUiLCJDaGFyaXR5SWQiOjMwNjQyMTUsIlNpemUiOiJzIiwiUmVmZXJlbmNlIjoiIiwiVHlwZSI6IkNoYXJpdHlEb25hdGUifQ=='
                  alt='Donation'
                />
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
