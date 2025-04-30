import React from "react";
import './siparis.css'
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, UncontrolledDropdown } from "reactstrap";

const toppings = [
    'Pepperoni',
    'Domates',
    'Biber',
    'Sosis',
    'Mısır',
    'Sucuk',
    'Kanada Jambonu',
    'Ananas',
    'Tavuk Izgara',
    'Jalepeno',
    'Kabak',
    'Soğan',
    'Sarımsak',
  ];

  const base_price = 85.5
  const topping_price = 5
  const max_toppings= 10
export default function Siparis() {
    return (
        <div className="order-container">
         <header className="order-header">
            <img className="logo" src="src/assets/iteration-1/logo.svg"/>
             <nav className="breadcrumb">
                 <a href="/">Anasayfa</a> – <a href="/">Seçenekler</a> – <span className='bold'>Sipariş Oluştur</span>
             </nav>
         </header>

        <main className="order-main">
         <h2>Position Absolute Acı Pizza</h2>
         <div className="price-rating">
          <span className="price">{base_price}₺</span>
          <span className="rating">4.9</span>
          <span className="reviews">(200)</span>
        </div>
        <p className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
        </main>
        <Form className="order-form">
            <FormGroup tag="fieldset" className="order-boyut">
                <legend>
                Boyut Seç
                </legend>
                <FormGroup check>
                <Input
                    name="küçük"
                    type="radio"
                />
                {' '}
                <Label check>
                    Küçük
                </Label>
                </FormGroup>
                <FormGroup check>
                <Input
                    name="orta"
                    type="radio"
                />
                {' '}
                <Label check>
                    Orta
                </Label>
                </FormGroup>
                <FormGroup check>
                <Input
                    name="büyük"
                    type="radio"
                />
                {' '}
                <Label check>
                    Büyük
                </Label>
                </FormGroup>
            </FormGroup>

            <UncontrolledDropdown group>
                <Button color="primary">
                    Hamur Seç
                </Button>
                <DropdownToggle
                    caret
                    color="primary"
                />
                <DropdownMenu>
                    <DropdownItem>
                    İncecik Hamur
                    </DropdownItem>
                    <DropdownItem>
                    Normal Hamur
                    </DropdownItem>
                    <DropdownItem>
                    Kalın Hamur
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
        </Form>
          
      </div>
    )
}