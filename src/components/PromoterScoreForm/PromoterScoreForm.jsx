import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

 import dynamic from "next/dynamic";
 const Ratings = dynamic(() => import("react-star-ratings"), {
   ssr: false,
 });

export default function PromoterScoreForm() {
    const {register, handleSubmit, formState:{errors, isValid}} = useForm({mode: "onChange"});  
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [ratingValue, setRatingValue] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    // 
    const submitForm = async (formData) => {
      setIsLoading(true);

      const payload = {
        name: formData.name,
        comment: formData.comment,
        rating: ratingValue
      }
  
      const JSONdata = JSON.stringify(payload);
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSONdata,
      }
      try {
        await fetch('https://jsonplaceholder.typicode.com/posts', options)
        setAlertSuccess(true)
      } catch (error) {
        console.log(error);
      }     
      setIsLoading(false);
    }

    useEffect(() => {
      let timeout
      if (alertSuccess) {
        timeout = setTimeout(() => setAlertSuccess(false), 3000);
      }
      return () => clearTimeout(timeout);
    }, [alertSuccess]);
    
    return (
      <div className={isLoading ? 'loading-skeleton' : ''}>
         {isLoading &&
            <div className="loading-state text-center">
              <h1 className="heading-s dark-medium text-center">Aguarde estamos processando</h1>
              <div class="loading-spinner"><div></div><div></div></div>
            </div>
         }

        {!!alertSuccess && <div className="alert success">Obrigado por utilizar nossos serviços!</div>}

          <form className="form" onSubmit={handleSubmit(submitForm)}>
            <h1 className="heading-m dark-high text-center">
              Conte o quanto você está satisfeito <br /> com nossos serviços
            </h1>
          
              <div className="form-rating">
                <h3 className="dark-high text-center heading-s">Marque de 1 à 5 estrelas</h3>
                <div className="form-rating-wrap">
                <Ratings rating={ratingValue} starRatedColor="#E63888" starDimension="25px" starSpacing="5px" typeOfWidget="Estrela" starHoverColor="#E63888" changeRating={setRatingValue} name="rating" numberOfStars={5}/>
                </div>
              </div>

              <div className="form-content">
                <div className="form-group">
                  <label htmlFor="fullname">Nome</label>
                  <input placeholder="Digite seu nome" {...register('name', {required:true})} />
                  {errors.name && errors.name.type == "required" && <p className="form-input-error">O campo nome é obrigatório</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="last">Comentário (Opcional)</label>
                  <input placeholder="Deixe aqui um comentário opcional"  {...register('comment')} />
                </div>

                <div className="form-group">
                <button disabled={!isValid} className="button button-solid button-size-fluid primary" type="submit">Enviar avaliação</button>
                </div>
            </div>
        </form>
      </div>
       
    )
  }