import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const ListItem = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }

  &:hover a {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const Link = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`

const Vaga = (props: Props) => (
  <ListItem>
    <Title>{props.titulo}</Title>
    <p>{props.localizacao}</p>
    <p>{props.nivel}</p>
    <p>{props.modalidade}</p>
    <p>
      R$ {props.salarioMin} - R$ {props.salarioMax}
    </p>
    <ul>
      {props.requisitos.map((requisito, index) => (
        <li key={index}>{requisito}</li>
      ))}
    </ul>
    <Link href="#">Ver detalhes e candidatar-se</Link>
  </ListItem>
)

export default Vaga
