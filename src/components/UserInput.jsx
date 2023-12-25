export default function UserInput() {
  return <section id="user-input">
    <div className="input-group">
      <label>Price</label>
      <input
        required
        type="number"
      />
    </div>
    <div className="input-group">
      <label>Currency</label>
      <select>
        <option>$USD</option>
      </select>
    </div>
</section>
}