import React, { useState } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'next/router';
import TextInput from '../../components/TextInput';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SignpostIcon from '@mui/icons-material/Signpost';

// import { Container } from './styles';

const RegisterAdress: React.FC = () => {
    const [postalCode, setPostalCode] = useState('')
    const [postalCodeError, setPostalCodeError] = useState(false)
    const [city, setCity] = useState('')
    const [road, setRoad] = useState('')
    const [houseNumber, setHouseNumber] = useState()

    const router = useRouter()

    const handleNext = () => {
        // if(nickname.length === 0 || code.length < 14 || companyName.length === 0){
        //   window.alert("Todos os campos devem ser preenchidos corretamente")
        //   return
        // }
    
        // localStorage.setItem("nickname", nickname)
        // localStorage.setItem("code", code)
        // localStorage.setItem("company_name", companyName)
        // router.push("/RegisterAdress")
      }

  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#E3F2FD",
  }}>
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      width: 1000,
      height: 650,
      padding: 30,
      borderRadius: 10,
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
    }}>
      <h2 style={{
        fontSize: 38,
        fontWeight: 'bold',
      }}>Cadastre-se</h2>
      <div style={{
        display: "flex",
        alignItems: "center",
      }}>
        <p style={{
          margin: "14px 0",
          fontSize: 16,
        }}>Já possui uma conta?</p>
        <span style={{
          textDecoration: "underline",
          color: "#009FB7",
          marginLeft: 12,
          cursor: "pointer"
        }}>Login</span>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 370,
      }}>
        <p style={{
            fontSize: 24,
            margin: "10px 0 20px"
          }}>Localização</p>
        <TextInput
            value={postalCode}
            masked={true}
            mask={"00000-000"}
            callback={(value)=>{setPostalCode(value.replace(/[^0-9]/g, ''))
              if(value.replace(/[^0-9]/g, '').length === 14 || value.replace(/[^0-9]/g, '').length === 0){
                  setPostalCodeError(false);
              }
              else if(value.replace(/[^0-9]/g, '').length != 0 && value.replace(/[^0-9]/g, '').length < 14){
                  setPostalCodeError(true);
              }}}
            error={postalCodeError}
            placeholder="CEP"
            margin="0 0 30px"
            icon={<LocationOnOutlinedIcon style={{
            width: 30,
            height: 30,
            }}/>}
        />
        <TextInput
            value={city}
            callback={(e)=>setCity(e.target.value)}
            placeholder="Cidade"
            margin="0 0 30px"
            icon={<LocationCityIcon style={{
            width: 30,
            height: 30,
            }}/>}
        />
        <TextInput
            value={road}
            callback={(e)=>setRoad(e.target.value)}
            placeholder="Rua"
            margin="0 0 30px"
            icon={<SignpostIcon style={{
            width: 30,
            height: 30,
            }}/>}
        />
        <TextInput
            value={houseNumber}
            callback={(e)=>setHouseNumber(e.target.value)}
            placeholder="Número"
            margin="0 0 30px"
            icon={<p style={{
              width: 18,
              height: 24,
              fontSize: 20,
              textAlign: "center",
            }}>Nº</p>}
        />
      </div>
      <Button text="Avançar" callback={()=>handleNext()}/>
      <Button text="Voltar" color="#009FB7" margin={10} callback={()=>router.push('/RegisterPersonInfo')}/>
    </div>
  </div>;;
}

export default RegisterAdress;