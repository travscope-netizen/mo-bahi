import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header style={{ background:'#111', color:'#fff', padding:'12px 20px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth: '1000px', margin:'0 auto' }}>
        <Link to="/" style={{ color:'#fff', textDecoration:'none', fontWeight:700 }}>Mo Bahi</Link>
        <nav>
          <Link to="/admin" style={{ color:'#fff', marginLeft:12, textDecoration:'none' }}>Admin</Link>
        </nav>
      </div>
    </header>
  );
}
