import React from 'react';
import { Col, Container, Image, Row, Button, Accordion } from 'react-bootstrap';
import faqIMG from '../../img/booking.jpg'

const FAQ = () => {
    return (
        <Container>
            <Row className="py-5">
                <Col xs={12}>
                    <h3 className="py-3 fw-bolder">Frequently Asked <span className="text-info">Question</span></h3>

                    <p className="fw-lighter">Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p>
                </Col>

            </Row>
            <Row className="pb-5 pt-3">
                <Col md={4}>
                    <Image src={faqIMG} thumbnail />
                    <h4 className="text-info pt-3">Download Brochure</h4>
                    <p className="fw-light">Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.</p>
                    <div className="text-start py-3">
                        <Button variant="info" className="text-white">Denticare Brochure</Button>
                    </div>

                </Col>
                <Col md={8}>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0" className="border">
                            <Accordion.Header>Why is visiting the dentist so important?</Accordion.Header>
                            <Accordion.Body>
                                Visiting the dentist regularly will not only help keep your teeth and mouth healthy, but will also help keep the rest of your body healthy. Dental care is important because it:
                                <ul>
                                    <li>Helps prevent tooth decay</li>
                                    <li>Protects against periodontal (gum) disease, which can lead to tooth and bone loss</li>
                                    <li>Prevents bad breath – brushing, flossing, and seeing the dentist regularly will help reduce the amount of bacteria in your mouth that causes bad breath</li>
                                    <li>Gives you a more attractive smile and increases your self-confidence</li>
                                    <li>Helps keep teeth looking bright by preventing them from becoming stained by food, drinks, and tobacco</li>
                                    <li>Strengthens your teeth so that you can enjoy healthy, beautiful smiles for the rest of your life!</li>

                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="border">
                            <Accordion.Header>My teeth feel fine. Do I still need to see a dentist?</Accordion.Header>
                            <Accordion.Body>
                                Your teeth may feel fine, but it’s still important to see the dentist regularly because problems can exist without you knowing. Your smile’s appearance is important, and your dentist can help keep your smile healthy and looking beautiful. With so many advances in dentistry, you no longer have to settle for stained, chipped, missing, or misshapen teeth. Today’s dentists offer many treatment choices that can help you smile with confidence, including:
                                <ul>
                                    <li>Professional teeth whitening</li>
                                    <li>Fillings that mimic the appearance of natural teeth</li>
                                    <li>Tooth replacement and full smile makeovers</li>

                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="border">
                            <Accordion.Header>What should I look for when choosing the right dentist for me?</Accordion.Header>
                            <Accordion.Body>
                                Choosing a dentist who “clicks” with you and your family is important, and you may wish to consider several dentists before making your final decision. During your first visit, you should be able to determine whether the dentist is right for you. During your appointment, consider the following:
                                <ul>

                                    <li>Is the appointment schedule convenient?</li>
                                    <li>Is the office easy to get to and close by?</li>
                                    <li>Does the office appear to be clean and orderly?</li>
                                    <li>Gives you a more attractive smile and increases your self-confidence</li>
                                    <li>Was your medical and dental history recorded and placed in a permanent file?</li>
                                    <li>Does the dentist explain techniques for good oral health?</li>
                                    <li>Is information about cost presented to you before treatment is scheduled?</li>
                                    <li>Is your dentist a member of the ADA (American Dental Association)?</li>

                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="border">
                            <Accordion.Header>How can I take care of my teeth between dental checkups?</Accordion.Header>
                            <Accordion.Body>



                                <ul>
                                    <li>  Always remember to brush your teeth at least two times a day, and floss at least once!</li>
                                    <li>Make sure to use toothpaste that contains fluoride, and ask your dentist if you need a fluoride rinse. This will help prevent cavities.</li>
                                    <li>
                                        Avoid foods with a lot of sugar (sugar increases the amount of bacteria that grows in your mouth causing more plaque and possibly cavities) and avoid tobacco (this can stain your teeth, cause gum disease, and eventually lead to oral cancer).</li>
                                    <li>
                                        Don’t be afraid to brush your tongue! By brushing your tongue, you will remove food particles and reduce the amount of plaque-causing bacteria. Tongue brushing also helps keep your breath fresh.</li>
                                    <li>Be sure to schedule your routine checkup. It is recommended that you visit the dentist every six months.</li>


                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className="border">
                            <Accordion.Header>At what age should I start taking my child to see the dentist?</Accordion.Header>
                            <Accordion.Body>
                                The American Academy of Pediatric Dentistry (AAPD) recommends that children first see a dentist as early as six months of age and no later than one year of age. During this time, your child’s baby teeth will be coming in and your dentist can examine the health of your child’s first few teeth. After the first visit, be sure to schedule regular checkups every six months.

                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;