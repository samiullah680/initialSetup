import { Accordion, Button, Card, TextStyles } from '@cedcommerce/ounce-ui';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Faqs = () => {
    const [clicked, setClicked] = useState(-1);
    const handleToggle = (index: any) => {
        if (clicked === index) {
            setClicked(-1);
        } else {
            setClicked(index);
        }
    };
    const navigate = useNavigate();
    const dataArr = [
        {
            title: "Accordion Title",
            answer:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        },
        {
            title: "Accordion Title",
            answer:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        },
        {
            title: "Accordion Title",
            answer:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        },
        {
            title: "Accordion Title",
            answer:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        },
    ];
    return (
        <Card
            title={'Frequently Asked Question'}
            action={
                <Button content='View all FAQ articles' type='TextButton' onClick={() => navigate('../faq')} />
            }
        >
            {dataArr.map((items: any, index: any) => {
                return (
                    <Accordion
                        key={index}
                        title={items.title}
                        active={clicked === index}
                        onClick={() => handleToggle(index)}
                    >
                        <TextStyles textcolor="light">{items.answer}</TextStyles>
                    </Accordion>
                );
            })}
        </Card>
    );
};

export default Faqs;