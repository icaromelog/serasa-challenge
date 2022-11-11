
import Card from '../components/Card/Card'
import PromoterScoreForm from '../components/PromoterScoreForm/PromoterScoreForm'

export default function Home() {
  return (
    <div className={`container center mt-40`}>
      <Card size="medium" align="center">
        <PromoterScoreForm />
      </Card>
    </div>
  )
}
