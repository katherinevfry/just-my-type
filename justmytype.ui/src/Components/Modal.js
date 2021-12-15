import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, Label, Input, UncontrolledTooltip } from 'reactstrap';
import { addFontToCategory, getUserCategories } from '../data/categoryData';
import { getUserByFBKey } from '../data/userData';
import { BasicBtn } from './styles';

export default function ModalComp({ setShowModal, showModal, user, fontId }) {
  const [cats, setCats] = useState([]);
  const toggle = () => setShowModal(!showModal);
  const [newRel, setNewRel] = useState({
    fontId: fontId || "",
    categoryId: "",
  });

  useEffect(() => {
    getUserByFBKey(user?.multiFactor?.user?.uid).then((resp) => {
      getUserCategories(resp.id).then(setCats);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    addFontToCategory(newRel).then();
  };

  const handleInputChange = (e) => {
    setNewRel((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <Modal isOpen={showModal} toggle={toggle}>
    <ModalHeader id="modalH" toggle={toggle}>
     Add font to category
    </ModalHeader>
    <ModalBody id="modalB">
    <Form onSubmit={handleSubmit}>
      <Label>Choose Category</Label>
           <Input name='categoryId'
           type='select'
           value={newRel.categoryId}
           placeholder="select a book"
           onChange={handleInputChange}
           >
          <option value=''>Select a Category</option>
          {cats?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </Input>
        <BasicBtn id="catBtn" color="#ef7255" type='submit'>add</BasicBtn>
      </Form>
    </ModalBody>
    <UncontrolledTooltip
    placement="top"
    target="catBtn"
    trigger="click"
    >Saved to category</UncontrolledTooltip>
  </Modal>
  )
};
