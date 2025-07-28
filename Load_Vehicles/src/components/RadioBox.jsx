export default function RadioBox() {
  return (
    <>
      <input type="radio" id="business" name="radiobox" className="mr-2 2xl:mr-3" />
      <label for="business">Business</label><br />
      <input type="radio" id="personal" name="radiobox" className="mr-2 2xl:mr-3" />
      <label for="personal">Personal</label>
    </>
  )
}