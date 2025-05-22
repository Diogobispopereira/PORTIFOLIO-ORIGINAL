import style from "./cursoReutilizado.module.css"

function CursoReutilizado({ nome, imagem }) {
  return (
    <article className={style.curso}>
      <h2>{nome}</h2>
      <section className={style.curso__container}>
        {imagem.map((item) => (
       
            <img key={item.id} src={item.img} alt={`Curso de ${nome}`} />
          
        ))}
      </section>
      <p>
        Você pode acessar o meu   
        
        <a
          href="https://www.linkedin.com/in/diogo-bispo-desenvolvedor-front-end/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
        >   
             <strong>LinkedIn</strong>
        </a> 
        para ver todos os cursos.
      </p>
    </article>
  )
}

export default CursoReutilizado
