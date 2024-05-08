import React, { useState } from 'react';

export default function DataInput() {
  const [bigha, setBigha] = useState('');
  const [katha, setKatha] = useState('');
  const [dhur, setDhur] = useState('');
  const [kanwa, setKanwa] = useState('');
  const [dismiltotal, setDismiltotal] = useState('0');
  const [acreTotal, setAcreTotal] = useState('0');

  const calculateValues = () => {
    let bigha_1 = parseFloat(bigha) || 0;
    let katha_1 = parseFloat(katha) || 0;
    let dhur_1 = parseFloat(dhur) || 0;
    const kanwa_1 = parseFloat(kanwa) || 0;

    let additionalBigha = 0;

    if (katha_1 >= 20) {
      additionalBigha = Math.floor(katha_1 / 20);
      katha_1 %= 20;
      bigha_1 += additionalBigha;
    }

    if (dhur_1 >= 20) {
      additionalBigha += Math.floor(dhur_1 / 20);
      dhur_1 %= 20;
      bigha_1 += additionalBigha;
    }

    let updatedDhur = dhur_1;

    let updatedKanwa = kanwa_1;

    if (updatedKanwa >= 16) {
      const extraDhur = Math.floor(updatedKanwa / 16);
      updatedDhur += extraDhur;
      updatedKanwa %= 16;
    }

    const total_1 =
      updatedDhur * 0.291 +
      bigha_1 * 400 * 0.291 +
      katha_1 * 20 * 0.291 +
      updatedKanwa * (1 / 16) * 0.291;

    setDismiltotal(total_1.toString());
    setBigha(bigha_1.toString());
    setKatha(katha_1.toString());
    setDhur(updatedDhur.toString());
    setKanwa(updatedKanwa.toString());

    const acre = total_1 / 100;
    setAcreTotal(acre.toString());
  };

  const handleCalculate = () => {
    calculateValues();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="card rounded shadow">
            <div className="card-body">
              <h2 className="card-title mb-4">Land Area Calculator</h2>
              <div className="mb-3">
                <label htmlFor="bighaInput" className="form-label">
                  Enter बीघा
                </label>
                <input
                  min="0"
                  type="text"
                  id="bighaInput"
                  className="form-control"
                  value={bigha}
                  onChange={(event) => setBigha(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="kathaInput" className="form-label">
                  Enter कट्ठा
                </label>
                <input
                  min="0"
                  type="text"
                  id="kathaInput"
                  className="form-control"
                  value={katha}
                  onChange={(event) => setKatha(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dhurInput" className="form-label">
                  Enter धूर
                </label>
                <input
                  min="0.0"
                  type="text"
                  id="dhurInput"
                  className="form-control"
                  value={dhur}
                  onChange={(event) => setDhur(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="kanwaInput" className="form-label">
                  Enter कनवा
                </label>
                <input
                  min="0.0"
                  type="text"
                  id="kanwaInput"
                  className="form-control"
                  value={kanwa}
                  onChange={(event) => setKanwa(event.target.value)}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleCalculate}>
                  Calculate
                </button>
              </div>
              <div className="mt-4">
                <h4>डिसमिल: {dismiltotal}</h4>
                <h4>एकड़: {acreTotal}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
