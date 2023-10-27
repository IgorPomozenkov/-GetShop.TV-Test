import React from 'react';

const Accepted: React.FC = React.memo(() => {
  //

  return (
    <div className="accepted">
      <h2 className="accepted__heading">ЗАЯВКА ПРИНЯТА</h2>

      <p className="accepted__text">
        Держите телефон под рукой.
        <br />
        Скоро с Вами свяжется наш менеджер.
      </p>
    </div>
  );
});

export default Accepted;
