import React, { useState } from 'react';
import {
  Row, Col,
  Breadcrumb, BreadcrumbItem,
  Form, FormGroup, Label, Input,
  Button, Card, CardBody
} from 'reactstrap';
import './siparis.css'


const TOPPINGS = [
  'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır',
  'Sucuk', 'Kanada Jambonu', 'Ananas', 'Tavuk Izgara',
  'Jalapeno', 'Kabak', 'Soğan', 'Sarımsak'
];

const OrderPizza = () => {
  const [size, setSize] = useState('');           
  const [dough, setDough] = useState('');         
  const [toppings, setToppings] = useState([]);   
  const [note, setNote] = useState('');           
  const [quantity, setQuantity] = useState(1);   

  const basePrice = 85.50;  
  const toppingPrice = 5;   

  const toggleTopping = (item) => {
    if (toppings.includes(item)) {
      setToppings(toppings.filter(topping => topping !== item));
    } else if (toppings.length < 10) {
      setToppings([...toppings, item]);
    }
  };

  const increaseQty = () => setQuantity(sayı => sayı + 1);
  const decreaseQty = () => setQuantity(sayı => (sayı > 1 ? sayı - 1 : 1));

  const selectedCount = toppings.length;
  const selectionsCost = selectedCount * toppingPrice;
  const totalPrice = (basePrice + selectionsCost) * quantity;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ size, dough, toppings, note, quantity, totalPrice });
  };

  return (
    <>
      <div className='header'>
        <img src='src/assets/iteration-1/logo.svg'/>
        <Breadcrumb className='breadcrumb'>
          <BreadcrumbItem><a href="/">Anasayfa</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Seçenekler</a></BreadcrumbItem>
          <BreadcrumbItem active>Sipariş Oluştur</BreadcrumbItem>
        </Breadcrumb>
        </div>
        <div className='megaDiv'>
        <div className="pizza-bilgileri">
            <h5 className='pizza-baslik'>Position Absolute Acı Pizza</h5>
            <div className='pizza-rating'>
                <h3>{basePrice}₺</h3>
                <p>4.9 (200)</p>
            </div>
            <p className='description'>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza,
          domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
          odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
          hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.</p>
        </div>

        <Form onSubmit={handleSubmit}>

         <div className='form-row'>
            <FormGroup tag="fieldset" className='boyut'>
                <legend className="doughSize">Boyut Seç *</legend>
                {['Küçük', 'Orta', 'Büyük'].map(elm => (
                <FormGroup check  key={elm}>
                    <Label check>
                    <Input
                        type="radio"
                        name="size"
                        value={elm}
                        checked={size === elm}
                        onChange={e => setSize(e.target.value)}
                    />{' '}{elm}
                    </Label>
                </FormGroup>
                ))}
            </FormGroup>

            <FormGroup className='hamur'>
                <Label for="dough">Hamur Seç *</Label>
                <Input
                type="select"
                id="dough"
                value={dough}
                onChange={e => setDough(e.target.value)}
                >
                <option value="">Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
                </Input>
            </FormGroup>
        </div> 
         

          <FormGroup className='toppings-form'>
            <Label><h5>Ek Malzemeler: <strong>{selectedCount}/10</strong></h5></Label>
            <p>En Fazla 10 Malzeme Seçebilirsiniz 5₺</p>
            <div className='toppings-grid'>
              {TOPPINGS.map(item => (
                <FormGroup check key={item} className="toppings">
                  <Label check>
                    <Input
                      type="checkbox"
                      value={item}
                      checked={toppings.includes(item)}
                      onChange={() => toggleTopping(item)}
                    />{' '}{item}
                  </Label>
                </FormGroup>
              ))}
            </div>
          </FormGroup>

          <FormGroup className='siparis-notu'>
            <Label htmlFor="note"><h5>Sipariş Notu</h5></Label>
            <Input
              type="textarea"
              id="note"
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </FormGroup>

        <div className="order-row">
            <div className="miktar">
            <Label>Miktar</Label>
            <div className='miktar-button'>
                <Button color="warning" onClick={decreaseQty}>-</Button>
                <span className="mx-3">{quantity}</span>
                <Button color="warning" onClick={increaseQty}>+</Button>
            </div>
            </div>

            <div className="pencere">
            <Card>
                <CardBody>
                <h5>Sipariş Toplamı</h5>
                <p>Seçimler: {selectionsCost}₺</p>
                <h4 className="text-danger">Toplam: {totalPrice}₺</h4>
                <Button color="warning" block>SİPARİŞ VER</Button>
                </CardBody>
            </Card>
            </div>
        </div>
        </Form>
        </div>
        
    </>
  );
};

export default OrderPizza;
