$(function(){
	var bohater = {
		imie:"Nie wpisano imienia", nazwisko:"Nie wpisano nazwiska", ksywa:"Nie wpisano ksywy",
		pochodzenie:"Nie wybrano pochodzenia", pochodzenie_cecha:"Nie wybrano cechy z pochodzenia",
		profesja:"Nie wybrano profesji", profesja_cecha:"Nie wybrano cechy z profesji",
		specjalizacja:"Nie wybrano specjalizacji",
		sztuczka:"Nie wybrano sztuczki",
		choroba:"Nie wylosowano choroby", lek:"Nie wylosowano leku",
		
		zr:0, pc:0, ch:0, sp:0, bd:0,
		d_zr:0, d_pc:0, d_ch:0, d_sp:0, d_bd:0,
		
		ww: [0,0,0],
		bs: [0,0,0],
		bd: [0,0,0],
		pp: [0,0,0],
		zm: [0,0,0],
		ot: [0,0,0],
		sg: [0,0,0],
		ka: [0,0,0],
		pr: [0,0,0],
		ng: [0,0,0],
		em: [0,0,0],
		sw: [0,0,0],
		me: [0,0,0],
		te: [0,0,0],
		wo: [0,0,0],
		sp: [0,0,0],
		pt: [0,0,0],
		sn: [0,0,0],
		jd: [0,0,0],
		/* */
		zrecznosc(){
			return this.zr*1+this.d_zr*1;
		},
		percepcja(){
			return this.pc*1+this.d_pc*1;
		},
		charakter(){
			return this.ch*1+this.d_ch*1;
		},
		spryt(){
			return this.sp*1+this.d_sp*1;
		},
		budowa(){
			return this.bd*1+this.d_bd*1;
		}
		/* */
	};
	var y = 30, y_spec = 35, y_temp = 0, guos = 0;
	$("#karta").hide();
	var ph_choice = "none";
	var fa_choice = "none";
	
	function um_reset(){
		$("#karta_ww1, #skill_value_ww1").html(ww[0]=0);
		$("#karta_ww2, #skill_value_ww2").html(ww[1]=0);
		$("#karta_ww3, #skill_value_ww3").html(ww[2]=0);	
			
		$("#karta_bs1, #skill_value_bs1").html(bs[0]=0);
		$("#karta_bs2, #skill_value_bs2").html(bs[1]=0);
		$("#karta_bs3, #skill_value_bs3").html(bs[2]=0);
		
		$("#karta_bd1, #skill_value_bd1").html(bd[0]=0);
		$("#karta_bd2, #skill_value_bd2").html(bd[1]=0);
		$("#karta_bd3, #skill_value_bd3").html(bd[2]=0);
		
		$("#karta_pp1, #skill_value_pp1").html(pp[0]=0);
		$("#karta_pp2, #skill_value_pp2").html(pp[1]=0);
		$("#karta_pp3, #skill_value_pp3").html(pp[2]=0);
		
		$("#karta_zm1, #skill_value_zm1").html(zm[0]=0);
		$("#karta_zm2, #skill_value_zm2").html(zm[1]=0);
		$("#karta_zm3, #skill_value_zm3").html(zm[2]=0);
		
		$("#karta_ot1, #skill_value_ot1").html(ot[0]=0);
		$("#karta_ot2, #skill_value_ot2").html(ot[1]=0);
		$("#karta_ot3, #skill_value_ot3").html(ot[2]=0);
		
		$("#karta_sg1, #skill_value_sg1").html(sg[0]=0);
		$("#karta_sg2, #skill_value_sg2").html(sg[1]=0);
		$("#karta_sg3, #skill_value_sg3").html(sg[2]=0);
		
		$("#karta_ka1, #skill_value_ka1").html(ka[0]=0);
		$("#karta_ka2, #skill_value_ka2").html(ka[1]=0);
		$("#karta_ka3, #skill_value_ka3").html(ka[2]=0);
		
		$("#karta_pr1, #skill_value_pr1").html(pr[0]=0);
		$("#karta_pr2, #skill_value_pr2").html(pr[1]=0);
		$("#karta_pr3, #skill_value_pr3").html(pr[2]=0);
		
		$("#karta_ng1, #skill_value_ng1").html(ng[0]=0);
		$("#karta_ng2, #skill_value_ng2").html(ng[1]=0);
		$("#karta_ng3, #skill_value_ng3").html(ng[2]=0);
		
		$("#karta_em1, #skill_value_em1").html(em[0]=0);
		$("#karta_em2, #skill_value_em2").html(em[1]=0);
		$("#karta_em3, #skill_value_em3").html(em[2]=0);
		
		$("#karta_sw1, #skill_value_sw1").html(sw[0]=0);
		$("#karta_sw2, #skill_value_sw2").html(sw[1]=0);
		$("#karta_sw3, #skill_value_sw3").html(sw[2]=0);
		
		$("#karta_me1, #skill_value_me1").html(me[0]=0);
		$("#karta_me2, #skill_value_me2").html(me[1]=0);
		$("#karta_me3, #skill_value_me3").html(me[2]=0);
		
		$("#karta_te1, #skill_value_te1").html(te[0]=0);
		$("#karta_te2, #skill_value_te2").html(te[1]=0);
		$("#karta_te3, #skill_value_te3").html(te[2]=0);
		
		$("#karta_wo1, #skill_value_wo1").html(wo[0]=0);
		$("#karta_wo2, #skill_value_wo2").html(wo[1]=0);
		$("#karta_wo3, #skill_value_wo3").html(wo[2]=0);
		
		$("#karta_sp1, #skill_value_sp1").html(sp[0]=0);
		$("#karta_sp2, #skill_value_sp2").html(sp[1]=0);
		$("#karta_sp3, #skill_value_sp3").html(sp[2]=0);
		
		$("#karta_pt1, #skill_value_pt1").html(pt[0]=0);
		$("#karta_pt2, #skill_value_pt2").html(pt[1]=0);
		$("#karta_pt3, #skill_value_pt3").html(pt[2]=0);
		
		$("#karta_sn1, #skill_value_sn1").html(sn[0]=0);
		$("#karta_sn2, #skill_value_sn2").html(sn[1]=0);
		$("#karta_sn3, #skill_value_sn3").html(sn[2]=0);
		
		$("#karta_jd1, #skill_value_jd1").html(jd[0]=0);
		$("#karta_jd2, #skill_value_jd2").html(jd[1]=0);
		$("#karta_jd3, #skill_value_jd3").html(jd[2]=0);
		
		$("#skills_points").html(y = 30);
		$("#skills_points_spec").html(y_spec = 35);
		
		$("#karta_choroba").html(bohater.choroba);
		$("#karta_lek").html(bohater.lek);
		
		$("#poch_ph_choice").hide();
		$("#poch_ph_text").show();
		
		$("#poch_fa_choice").hide();
		$("#poch_fa_text").show();
		
		ph_choice = "none";
		fa_choice = "none";
		$(".poch_ph_choice_tile").css({'background-color': '#555'});
		$(".poch_fa_choice_tile").css({'background-color': '#555'});
	}
	$("#pochmenu").click(function(){ um_reset(); });
	$(".poch_ph_choice_tile").click(function(){ um_reset(); });
	$(".poch_fa_choice_tile").click(function(){ um_reset(); });

	// POCHODZENIE -----------------------------------------------------------------------------------------
	$("#poch_descrip").hide();
	function reset_additional_stat(){
		bohater.d_zr = 0; bohater.d_pc = 0; bohater.d_ch = 0; bohater.d_sp = 0; bohater.d_bd = 0;
	}
	function poch_reset(){ 
		//if(bohahter.pochodzenie == 'Nie wybrano pochodzenia')
			$("#poch_descrip").slideDown(); // shows box with cechy z pochodzenia
		$(".poch_descrip").hide(); // hides all cechy z pochodzenia
		$(".poch_tile1").css({'background-image': 'url("style/img/tile1.png")', 'color': '#0E7'}); // resets color on green tiles
		reset_additional_stat(); // resets additional points from pochodzenie
		bohater.pochodzenie_cecha = "Nie wybrano cechy z pochodzenia"; // asingning value
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
	};
	$("#poch_no").click(function(){
		poch_reset(); // function above
		bohater.pochodzenie = "Nie twój zasrany interes"; // changes value of pochodzenie
		$("#poch_no").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); // changes color of green tile to clicked 
		$("#poch_no_descrip").show(); // shows cechy z pochodzenia for given pochodzenie
		bohater.d_zr++; 
	});
	$("#poch_det").click(function(){
		poch_reset();
		bohater.pochodzenie = "Detroit";
		$("#poch_det").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_det_descrip").fadeIn();
		bohater.d_zr++;
	});
	$("#poch_fa").click(function(){
		poch_reset();
		bohater.pochodzenie = "Federacja Appalachów";
		$("#poch_fa").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_fa_descrip").fadeIn();
		bohater.d_ch++;
	});
	$("#poch_cp").click(function(){
		poch_reset();
		bohater.pochodzenie = "Człowiek pustyni";
		$("#poch_cp").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_cp_descrip").fadeIn();
		bohater.d_pc++;
	});
	$("#poch_mia").click(function(){
		poch_reset();
		bohater.pochodzenie = "Miami";
		$("#poch_mia").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_mia_descrip").fadeIn();
		bohater.d_bd++;
	});
	$("#poch_mis").click(function(){
		poch_reset();
		bohater.pochodzenie = "Missisipi";
		$("#poch_mis").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_mis_descrip").fadeIn();
		bohater.d_pc++;
	});
	$("#poch_ny").click(function(){
		poch_reset();
		bohater.pochodzenie = "Nowy Jork";
		$("#poch_ny").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_ny_descrip").fadeIn();
		bohater.d_ch++;
	});
	$("#poch_ph").click(function(){
		poch_reset();
		bohater.pochodzenie = "Południowa Hegemonia";
		$("#poch_ph").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_ph_descrip").fadeIn();
		bohater.d_bd++;//?
	});
	$("#poch_po").click(function(){
		poch_reset();
		bohater.pochodzenie = "Posterunek";
		$("#poch_po").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_po_descrip").fadeIn();
		bohater.d_sp++;
	});
	$("#poch_slc").click(function(){
		poch_reset();
		bohater.pochodzenie = "Salt Lake City";
		$("#poch_slc").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_slc_descrip").fadeIn();
		bohater.d_sp++;
	});
	$("#poch_tex").click(function(){
		poch_reset();
		bohater.pochodzenie = "Texas";
		$("#poch_tex").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_tex_descrip").fadeIn();
		bohater.d_bd++;
	});
	$("#poch_veg").click(function(){
		poch_reset();
		bohater.pochodzenie = "Vegas";
		$("#poch_veg").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#poch_veg_descrip").fadeIn();
		bohater.d_zr++;
	});

	// CECHA Z POCHODZENIA ------------------------------------------------------------------------------
	
	
	
	// NIE TWÓJ ZASRANY INTERES -------------------------------------------------------------------------
	$("#poch_no_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Wszechstronność";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_no_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_no_stat_zr").click(function(){
		reset_additional_stat();
		bohater.d_zr++;
		$(".poch_no_stat_choice").css({'background-color': '#333'});
		$(this).css({'background-color': '#222'});
	});
	$("#poch_no_stat_pc").click(function(){
		reset_additional_stat();
		bohater.d_pc++;
		$(".poch_no_stat_choice").css({'background-color': '#333'});
		$(this).css({'background-color': '#222'});
	});
	$("#poch_no_stat_ch").click(function(){
		reset_additional_stat();
		bohater.d_ch++;
		$(".poch_no_stat_choice").css({'background-color': '#333'});
		$(this).css({'background-color': '#222'});
	});
	$("#poch_no_stat_sp").click(function(){
		reset_additional_stat();
		bohater.d_sp++;
		$(".poch_no_stat_choice").css({'background-color': '#333'});
		$(this).css({'background-color': '#222'});
	});
	$("#poch_no_stat_bd").click(function(){
		reset_additional_stat();
		bohater.d_bd++;
		$(".poch_no_stat_choice").css({'background-color': '#333'});
		$(this).css({'background-color': '#222'});
	});
	$("#poch_no_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Wszechstronność do kwadratu";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_no_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// DETROIT -------------------------------------------------------------------------
	$("#poch_det_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Jeśli ma silnik to ruszy";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_det_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_det_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Siódme poty";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_det_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_det_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Ale jazda!";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_det_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// FEDERACJA APPALACHÓW -------------------------------------------------------------------------
	$("#poch_fa_c1").click(function(){
		bohater.pochodzenie_cecha = "Szlachetnie urodzony";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_fa_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
		$("#poch_fa_text").hide();
		$("#poch_fa_choice").show();
	});
	
	$("#poch_fa_choice_ng").click(function(){
		um_reset();
		fa_choice = "ng";
		$("#karta_ng1, #skill_value_ng1").html(ng[0] = 2);
		$("#karta_ng2, #skill_value_ng2").html(ng[1] = 2);
		$("#karta_ng3, #skill_value_ng3").html(ng[2] = 2);
		$(".poch_fa_choice_tile").css({'background-color': '#555'});
		$("#poch_fa_choice_ng").css({'background-color': '#999'});
	});
	$("#poch_fa_choice_em").click(function(){
		um_reset();
		fa_choice = "em";
		$("#karta_em1, #skill_value_em1").html(em[0] = 2);
		$("#karta_em2, #skill_value_em2").html(em[1] = 2);
		$("#karta_em3, #skill_value_em3").html(em[2] = 2);
		$(".poch_fa_choice_tile").css({'background-color': '#555'});
		$("#poch_fa_choice_em").css({'background-color': '#999'});
	});
	$("#poch_fa_choice_sw").click(function(){
		um_reset();
		fa_choice = "sw";
		$("#karta_sw1, #skill_value_sw1").html(sw[0] = 2);
		$("#karta_sw2, #skill_value_sw2").html(sw[1] = 2);
		$("#karta_sw3, #skill_value_sw3").html(sw[2] = 2);
		$(".poch_fa_choice_tile").css({'background-color': '#555'});
		$("#poch_fa_choice_sw").css({'background-color': '#999'});
	});
	
	$("#poch_fa_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Pojedynkowicz";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_fa_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_fa_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Wychuchana spluwa";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_fa_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// CZŁOWIEK PUSTYNI -------------------------------------------------------------------------
	$("#poch_cp_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Towarzysz";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_cp_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_cp_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Jestem duchem pustyni";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_cp_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_cp_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Polegam tylko na sobie";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_cp_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// MIAMI -------------------------------------------------------------------------
	$("#poch_mia_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Człowiek aligator";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_mia_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_mia_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Ja już swoje odchorowałem";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_mia_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_mia_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Walkabout";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_mia_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// MISSISIPI -------------------------------------------------------------------------
	$("#poch_mis_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Coś mi tu śmierdzi";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_mis_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_mis_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Chodźmy, na pewno już utonął";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_mis_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_mis_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Kwas w żyłach, chlor w płucach";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_mis_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// NEW YORK -------------------------------------------------------------------------
	$("#poch_ny_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Zalety klasycznego wykształcenia";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_ny_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
		$("#skills_points_spec").html(y_spec = 45);
	});
	$("#poch_ny_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Wizja";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_ny_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_ny_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Czas patriotów";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_ny_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// POŁUDZNIOWA HEGEMONIA -------------------------------------------------------------------------
	$("#poch_ph_c1").click(function(){

		bohater.pochodzenie_cecha = "Urodzony morderca";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_ph_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
		$("#poch_ph_text").hide();
		$("#poch_ph_choice").show();
	});
	
	$("#poch_ph_choice_ww").click(function(){
		um_reset();
		ph_choice = "ww";
		$(".poch_ph_choice_tile").css({'background-color': '#555'});
		$("#poch_ph_choice_ww").css({'background-color': '#999'});
		$("#karta_ww1, #skill_value_ww1").html(ww[0] = 2);
		$("#karta_ww2, #skill_value_ww2").html(ww[1] = 2);
		$("#karta_ww3, #skill_value_ww3").html(ww[2] = 2);
	});
	$("#poch_ph_choice_bs").click(function(){
		um_reset();
		ph_choice = "bs";
		$("#karta_bs1, #skill_value_bs1").html(bs[0] = 2);
		$("#karta_bs2, #skill_value_bs2").html(bs[1] = 2);
		$("#karta_bs3, #skill_value_bs3").html(bs[2] = 2);
		$(".poch_ph_choice_tile").css({'background-color': '#555'});
		$("#poch_ph_choice_bs").css({'background-color': '#999'});
	});
	$("#poch_ph_choice_bd").click(function(){
		um_reset();
		ph_choice = "bd";
		$("#karta_bd1, #skill_value_bd1").html(bd[0] = 2);
		$("#karta_bd2, #skill_value_bd2").html(bd[1] = 2);
		$("#karta_bd3, #skill_value_bd3").html(bd[2] = 2);
		$(".poch_ph_choice_tile").css({'background-color': '#555'});
		$("#poch_ph_choice_bd").css({'background-color': '#999'});
	});
	$("#poch_ph_choice_sw").click(function(){
		um_reset();
		ph_choice = "sw";
		$("#karta_sw1, #skill_value_sw1").html(sw[0] = 2);
		$("#karta_sw2, #skill_value_sw2").html(sw[1] = 2);
		$("#karta_sw3, #skill_value_sw3").html(sw[2] = 2);
		$(".poch_ph_choice_tile").css({'background-color': '#555'});
		$("#poch_ph_choice_sw").css({'background-color': '#999'});
	});
	$("#poch_ph_choice_pt").click(function(){
		um_reset();
		ph_choice = "pt";
		$("#karta_pt1, #skill_value_pt1").html(pt[0] = 2);
		$("#karta_pt2, #skill_value_pt2").html(pt[1] = 2);
		$("#karta_pt3, #skill_value_pt3").html(pt[2] = 2);
		
		$("#poch_ph_choice_pt").css({'background-color': '#999'});
	});
	
	$("#poch_ph_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Wiesz, zjadłem własnego psa";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_ph_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_ph_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Zawzięty sukinkot";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_ph_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// POSTERUNEK -------------------------------------------------------------------------
	$("#poch_po_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Na symulatorze to działało";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_po_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_po_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Hi-Tech";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_po_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_po_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Moloch? Coś o nim słyszałem";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_po_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// SALT LAKE CITY -------------------------------------------------------------------------
	$("#poch_slc_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Cholerny kaznodzieja";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_slc_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_slc_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Wierzę";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_slc_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_slc_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Przed wojną wszystko było lepsze";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_slc_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	// TEXAS -------------------------------------------------------------------------
	$("#poch_tex_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Człowiek zwany koniem";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_tex_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_tex_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Doktor Quinn";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_tex_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
		$("#karta_me1, #skill_value_me1").html(me[0] = 4);
		$("#karta_me2, #skill_value_me2").html(me[1] = 4);
		$("#karta_me3, #skill_value_me3").html(me[2] = 4);
	});
	$("#poch_tex_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Zdrowa okolica";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_tex_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
		$("#karta_choroba").html("Brak");
		$("#karta_lek").html("Brak");
	});
	// VEGAS -------------------------------------------------------------------------
	$("#poch_veg_c1").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Fart";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_veg_c1").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	$("#poch_veg_c2").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Hazardzista";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_veg_c2").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	
	
	$("#poch_veg_c3").click(function(){
		um_reset();
		bohater.pochodzenie_cecha = "Telepata";
		$(".poch_cecha").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_default.jpg")'});
		$("#poch_veg_c3").css({'background-image': 'url("style/img/poch_cechy/poch_cecha_clicked.jpg")'});
	});
	
	// PROFESJA ---------------------------------------------------------------------------------------------
	$("#prof_descrip").hide();
	
	function prof_reset(){ 
		$("#prof_descrip").slideDown(); // shows box with cechy z profesji
		$(".prof_descrip").hide(); //  hides all cechy z profesji
		$(".prof_tile1").css({'background-image': 'url("style/img/tile1.png")', 'color': '#0E7'}); // resets color of green tile
		bohater.profesja_cecha = "Nie wybrano cechy z profesji";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
	};

	$("#prof_chemik").click(function(){
		bohater.profesja = "Chemik";	// sets value of profesja and inputs it into card
		prof_reset(); // function above
		$("#prof_chemik").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); // changes color of chosen green tile
		$("#prof_descrip_chemik").fadeIn(); // shows cechy z profesji for choosen profesja
	});
	$("#prof_ganger").click(function(){
		prof_reset();
		bohater.profesja = "Ganger";
		$("#prof_ganger").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_ganger").fadeIn();
	});
	$("#prof_gladiator").click(function(){
		prof_reset();
		bohater.profesja = "Gladiator";
		$("#prof_gladiator").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_gladiator").fadeIn();
	});
	$("#prof_handlarz").click(function(){
		prof_reset();
		bohater.profesja = "Handlarz";
		$("#prof_handlarz").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_handlarz").fadeIn();
	});
	$("#prof_kaznodzieja").click(function(){
		prof_reset();
		bohater.profesja = "Kaznodzieja Nowej Ery";
		$("#prof_kaznodzieja").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_kaznodzieja").fadeIn();
	});
	$("#prof_kowboj").click(function(){
		prof_reset();
		bohater.profesja = "Kowboj";
		$("#prof_kowboj").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_kowboj").fadeIn();
	});
	$("#prof_kurier").click(function(){
		prof_reset();
		bohater.profesja = "Kurier";
		$("#prof_kurier").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_kurier").fadeIn();
	});
	$("#prof_lowca").click(function(){
		prof_reset();
		bohater.profesja = "Łowca";
		$("#prof_lowca").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_lowca").fadeIn();
	});
	$("#prof_lowcamutantow").click(function(){
		prof_reset();
		bohater.profesja = "Łowca mutantów";
		$("#prof_lowcamutantow").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_lowcamutantow").fadeIn();
	});
	$("#prof_mafiozo").click(function(){
		prof_reset();
		bohater.profesja = "Mafiozo";
		$("#prof_mafiozo").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_mafiozo").fadeIn();
	});
	$("#prof_medyk").click(function(){
		prof_reset();
		bohater.profesja = "Medyk";
		$("#prof_medyk").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_medyk").fadeIn();
	});
	$("#prof_monter").click(function(){
		prof_reset();
		bohater.profesja = "Monter";
		$("#prof_monter").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_monter").fadeIn();
	});
	$("#prof_najemnik").click(function(){
		prof_reset();
		bohater.profesja = "Najemnik";
		$("#prof_najemnik").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_najemnik").fadeIn();
	});
	$("#prof_ochroniarz").click(function(){
		prof_reset();
		bohater.profesja = "Ochroniarz";
		$("#prof_ochroniarz").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_ochroniarz").fadeIn();
	});
	$("#prof_sedzia").click(function(){
		prof_reset();
		bohater.profesja = "Sędzia";
		$("#prof_sedzia").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_sedzia").fadeIn();
	});
	$("#prof_spec").click(function(){
		prof_reset();
		bohater.profesja = "Spec";
		$("#prof_spec").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_spec").fadeIn();
	});
	$("#prof_szaman").click(function(){
		prof_reset();
		bohater.profesja = "Szaman";
		$("#prof_szaman").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_szaman").fadeIn();
	});
	$("#prof_szczur").click(function(){
		prof_reset();
		bohater.profesja = "Szczur";
		$("#prof_szczur").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_szczur").fadeIn();
	});
	$("#prof_treserbestii").click(function(){
		prof_reset();
		bohater.profesja = "Treser bestii";
		$("#prof_treserbestii").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_treserbestii").fadeIn();
	});
	$("#prof_tropiciel").click(function(){
		prof_reset();
		bohater.profesja = "Tropiciel";
		$("#prof_tropiciel").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_tropiciel").fadeIn();
	});
	$("#prof_wojownikautostrady").click(function(){
		prof_reset();
		bohater.profesja = "Wojownik autostrady";
		$("#prof_wojownikautostrady").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_wojownikautostrady").fadeIn();
	});
	$("#prof_wojownikklanu").click(function(){
		prof_reset();
		bohater.profesja = "Wojownik klanu";
		$("#prof_wojownikklanu").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_wojownikklanu").fadeIn();
	});
	$("#prof_zabojca").click(function(){
		prof_reset();
		bohater.profesja = "Zabójca";
		$("#prof_zabojca").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_zabojca").fadeIn();
	});
	$("#prof_zabojcamaszyn").click(function(){
		prof_reset();
		bohater.profesja = "Zabójca maszyn";
		$("#prof_zabojcamaszyn").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_zabojcamaszyn").fadeIn();
	});
	$("#prof_zlodziej").click(function(){
		prof_reset();
		bohater.profesja = "Złodziej";
		$("#prof_zlodziej").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_zlodziej").fadeIn();
	});
	$("#prof_zolnierz").click(function(){
		prof_reset();
		bohater.profesja = "Żołnierz";
		$("#prof_zolnierz").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
		$("#prof_descrip_zolnierz").fadeIn();
	});
	
	// CECHA Z PROFESJI -------------------------------------------------------------------------------------
	$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
	
	// CHEMIK -------------------------------------------------------------------------------------------
	$("#prof_chemik_c1").click(function(){
		bohater.profesja_cecha = "Smakuje jak arszenik";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_chemik_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_chemik_c2").click(function(){
		bohater.profesja_cecha = "Farmaceuta";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_chemik_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// GANGER -------------------------------------------------------------------------------------------
	$("#prof_ganger_c1").click(function(){
		bohater.profesja_cecha = "Jeden z nich";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_ganger_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_ganger_c2").click(function(){
		bohater.profesja_cecha = "Odważny czy głupi?";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_ganger_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// GLADIATOR ----------------------------------------------------------------------------------------
	$("#prof_gladiator_c1").click(function(){
		bohater.profesja_cecha = "Nie do zdarcia";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_gladiator_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_gladiator_c2").click(function(){
		bohater.profesja_cecha = "Łyżeczka";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_gladiator_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// HANDLARZ ----------------------------------------------------------------------------------------
	$("#prof_handlarz_c1").click(function(){
		bohater.profesja_cecha = "Trakt handlowy";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_handlarz_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_handlarz_c2").click(function(){
		bohater.profesja_cecha = "Szklarz";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_handlarz_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// KAZNODZIEJA NOWEJ ERY ---------------------------------------------------------------------------
	$("#prof_kaznodzieja_c1").click(function(){
		bohater.profesja_cecha = "Spójrz mi w oczy";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_kaznodzieja_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_kaznodzieja_c2").click(function(){
		bohater.profesja_cecha = "Amen";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_kaznodzieja_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// KOWBOJ ------------------------------------------------------------------------------------------
	$("#prof_kowboj_c1").click(function(){
		bohater.profesja_cecha = "Rewolwerowiec";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_kowboj_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_kowboj_c2").click(function(){
		bohater.profesja_cecha = "Ostatnia kula";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_kowboj_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// KURIER ------------------------------------------------------------------------------------------
	$("#prof_kurier_c1").click(function(){
		bohater.profesja_cecha = "Znajomości";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_kurier_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_kurier_c2").click(function(){
		bohater.profesja_cecha = "Skrytka";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_kurier_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// ŁOWCA -------------------------------------------------------------------------------------------
	$("#prof_lowca_c1").click(function(){
		bohater.profesja_cecha = "Fotograficzna pamięć";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_lowca_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_lowca_c2").click(function(){
		bohater.profesja_cecha = "Nieugięty";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_lowca_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// ŁOWCA MUTANTÓW ----------------------------------------------------------------------------------
	$("#prof_lowcamutantow_c1").click(function(){
		bohater.profesja_cecha = "Bez tajemnic";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_lowcamutantow_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_lowcamutantow_c2").click(function(){
		bohater.profesja_cecha = "Mutant na śniadanie";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_lowcamutantow_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// MAFIOZO -----------------------------------------------------------------------------------------
	$("#prof_mafiozo_c1").click(function(){
		bohater.profesja_cecha = "Bezlitosny";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_mafiozo_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_mafiozo_c2").click(function(){
		bohater.profesja_cecha = "Klasa";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_mafiozo_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// MEDYK -------------------------------------------------------------------------------------------
	$("#prof_medyk_c1").click(function(){
		bohater.profesja_cecha = "Reputacja";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_medyk_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_medyk_c2").click(function(){
		bohater.profesja_cecha = "Sanitariusz polowy";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_medyk_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// MONTER ------------------------------------------------------------------------------------------
	$("#prof_monter_c1").click(function(){
		bohater.profesja_cecha = "Zapałki i agrafka";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_monter_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_monter_c2").click(function(){
		bohater.profesja_cecha = "Kłopotliwy nadmiar";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_monter_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// NAJEMNIK ----------------------------------------------------------------------------------------
	$("#prof_najemnik_c1").click(function(){
		bohater.profesja_cecha = "Reputacja";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_najemnik_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_najemnik_c2").click(function(){
		bohater.profesja_cecha = "Maszyna do zabijania";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_najemnik_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// OCHRONIARZ --------------------------------------------------------------------------------------
	$("#prof_ochroniarz_c1").click(function(){
		bohater.profesja_cecha = "Wyciszenie";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_ochroniarz_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_ochroniarz_c2").click(function(){
		bohater.profesja_cecha = "Zanim on";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_ochroniarz_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// SĘDZIA ------------------------------------------------------------------------------------------
	$("#prof_sedzia_c1").click(function(){
		bohater.profesja_cecha = "Mundur i odznaka";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_sedzia_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_sedzia_c2").click(function(){
		bohater.profesja_cecha = "Jeden z nas";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_sedzia_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// SPEC --------------------------------------------------------------------------------------------
	$("#prof_spec_c1").click(function(){
		bohater.profesja_cecha = "Wykształcenie";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_spec_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_spec_c2").click(function(){
		bohater.profesja_cecha = "Skupienie";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_spec_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// SZAMAN ------------------------------------------------------------------------------------------
	$("#prof_szaman_c1").click(function(){
		bohater.profesja_cecha = "Duchy przemówiły";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_szaman_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_szaman_c2").click(function(){
		bohater.profesja_cecha = "Totem";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_szaman_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// SZCZUR ------------------------------------------------------------------------------------------
	$("#prof_szczur_c1").click(function(){
		bohater.profesja_cecha = "A co mi tam";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_szczur_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_szczur_c2").click(function(){
		bohater.profesja_cecha = "Szary";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_szczur_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// TRESER BESTII -----------------------------------------------------------------------------------
	$("#prof_treserbestii_c1").click(function(){
		bohater.profesja_cecha = "Bestia";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_treserbestii_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_treserbestii_c2").click(function(){
		bohater.profesja_cecha = "Wilczy kieł";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_treserbestii_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// TROPICIEL ---------------------------------------------------------------------------------------
	$("#prof_tropiciel_c1").click(function(){
		bohater.profesja_cecha = "Wyuczone zmysły";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_tropiciel_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_tropiciel_c2").click(function(){
		bohater.profesja_cecha = "Rozpoznawanie stworzeń";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_tropiciel_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// WOJOWNIK AUTOSTRADY -----------------------------------------------------------------------------
	$("#prof_wojownikautostrady_c1").click(function(){
		bohater.profesja_cecha = "Drzwi w drzwi";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_wojownikautostrady_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_wojownikautostrady_c2").click(function(){
		bohater.profesja_cecha = "Osłona samochodu";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_wojownikautostrady_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// WOJOWNIK KLANU ----------------------------------------------------------------------------------
	$("#prof_wojownikklanu_c1").click(function(){
		bohater.profesja_cecha = "My i oni";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_wojownikklanu_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_wojownikklanu_c2").click(function(){
		bohater.profesja_cecha = "To mój dom";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_wojownikklanu_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// ZABÓJCA ---------------------------------------------------------------------------------------
	$("#prof_zabojca_c1").click(function(){
		bohater.profesja_cecha = "Koniec zlecenia";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_zabojca_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_zabojca_c2").click(function(){
		bohater.profesja_cecha = "Jeden strzał";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_zabojca_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// ZABÓJCA MASZYN ----------------------------------------------------------------------------------
	$("#prof_zabojcamaszyn_c1").click(function(){
		bohater.profesja_cecha = "Słaby punkt";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_zabojcamaszyn_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_zabojcamaszyn_c2").click(function(){
		bohater.profesja_cecha = "Empiryk";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_zabojcamaszyn_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// ZŁODZIEJ ---------------------------------------------------------------------------------------
	$("#prof_zlodziej_c1").click(function(){
		bohater.profesja_cecha = "Elektronik";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_zlodziej_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_zlodziej_c2").click(function(){
		bohater.profesja_cecha = "Kot";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_zlodziej_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	// ŻOŁNIERZ ---------------------------------------------------------------------------------------
	$("#prof_zolnierz_c1").click(function(){
		bohater.profesja_cecha = "Wyszkolenie";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_zolnierz_c1").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	$("#prof_zolnierz_c2").click(function(){
		bohater.profesja_cecha = "Rutyna";
		$(".subprof").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_default.jpg")'});
		$("#prof_zolnierz_c2").css({'background-image': 'url("style/img/prof_cechy/prof_cecha_clicked.jpg")'});
	});
	
	// SPECJALIZACJA ----------------------------------------------------------------------------------------
	$("#spec_descrip").hide();
	function spec_reset(){ 
		$("#spec_descrip").slideDown(); // shows box for description of specjalizacja
		$(".spec_pic").hide(); // hides all descriptions of specjalizacja
		$(".spectile").css({'background-image': 'url("style/img/tile1.png")', 'color': '#0E7'}); // changes color of all green tiles to default
		$(".skills_type").css({'background-color': '#333'}); // changes spec-skills background color to default
	};
	// each following 4 function is changing background color of skills based on choosen specjalizacja
	function spec_woj_skill_pick() { 
		spec_reset(); // described above
		$("#ww1").css({'background-color': '#888'});
		$("#bs1").css({'background-color': '#888'});
		$("#bd1").css({'background-color': '#888'});
		$("#sw1").css({'background-color': '#888'});
		$("#pt1").css({'background-color': '#888'});
	};
	function spec_rang_skill_pick() {
		spec_reset();
		$("#bd1").css({'background-color': '#888'});
		$("#ot1").css({'background-color': '#888'});
		$("#sg1").css({'background-color': '#888'});
		$("#ka1").css({'background-color': '#888'});
		$("#pr1").css({'background-color': '#888'});
		$("#me1").css({'background-color': '#888'});
		$("#sn1").css({'background-color': '#888'});
		$("#jd1").css({'background-color': '#888'});
	};
	function spec_tech_skill_pick() {
		spec_reset();
		$("#pp1").css({'background-color': '#888'});
		$("#me1").css({'background-color': '#888'});
		$("#te1").css({'background-color': '#888'});
		$("#wo1").css({'background-color': '#888'});
		$("#sp1").css({'background-color': '#888'});
		$("#pt1").css({'background-color': '#888'});
	};
	function spec_cwa_skill_pick() {
		spec_reset();
		$("#zm1").css({'background-color': '#888'});
		$("#ka1").css({'background-color': '#888'});
		$("#ng1").css({'background-color': '#888'});
		$("#em1").css({'background-color': '#888'});
	};
	
	$("#spec_tech").click(function(){
		bohater.specjalizacja = "Technik"; // sets value of specjalizacja and inputs it into card
		spec_tech_skill_pick(); // functions described above
		$("#spec_tech_descrip").fadeIn(); // shows description of choosen specjalizacja
		$("#spec_tech").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); // changes color of clicked tile
	});
	$("#spec_woj").click(function(){
		bohater.specjalizacja = "Wojownik";
		spec_woj_skill_pick();
		$("#spec_woj_descrip").fadeIn();
		$("#spec_woj").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
	});
	$("#spec_rang").click(function(){
		bohater.specjalizacja = "Ranger";
		spec_rang_skill_pick();
		$("#spec_rang_descrip").fadeIn();
		$("#spec_rang").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
	});
	$("#spec_cwa").click(function(){
		bohater.specjalizacja = "Cwaniak";
		spec_cwa_skill_pick();
		$("#spec_cwa_descrip").fadeIn();
		$("#spec_cwa").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'});
	});
	
	// ----------------------------------- WSPÓŁCZYNNIKI SPOSÓB --------------------------------
	
	var spl = 0, u_inp_test = false;
	
	$("#dice_random").hide(); 
	$("#dice_distribution").hide(); 
	$("#dice_userInput").hide(); 
	
	$("#dice_way_pick_random").click(function(){ $("#dice_way_pick").slideUp(); $("#dice_random").slideDown(); $("#r_final").slideDown(); });
	$("#dice_way_pick_distribution").click(function(){ spl = 40; $("#dice_way_pick").slideUp(); $("#dice_distribution").slideDown(); bohater.zr = 4; bohater.pc = 4; bohater.ch = 4; bohater.sp = 4; bohater.bd = 4; });
	$("#dice_way_pick_userInput").click(function(){ u_inp_test = true; $("#dice_way_pick").slideUp(); $("#dice_userInput").slideDown(); });

	
	
// ----------------------------------- WSPÓŁCZYNNIKI RZUCONE --------------------------------
	
	function wsp_rzuc(){
		bohater.zr = $("#userInput_zr").val();
		bohater.pc = $("#userInput_pc").val();
		bohater.ch = $("#userInput_ch").val();
		bohater.sp = $("#userInput_sp").val();
		bohater.bd = $("#userInput_bd").val();
	}

// ----------------------------------- WSPÓŁCZYNNIKI WYBRANE -------------------------------------
	
	$("#plus_zr").click(function(){ if (bohater.zr < 19 && spl > 0){ $("#dice_distribution_points_zr").html(++bohater.zr); $("#dice_distribution_points_left").html(--spl); } });
	
	$("#plus_pc").click(function(){ if (bohater.pc < 19 && spl > 0){ $("#dice_distribution_points_pc").html(++bohater.pc); $("#dice_distribution_points_left").html(--spl); } });
	
	$("#plus_ch").click(function(){ if (bohater.ch < 19 && spl > 0){ $("#dice_distribution_points_ch").html(++bohater.ch); $("#dice_distribution_points_left").html(--spl); } });
	
	$("#plus_sp").click(function(){ if (bohater.sp < 19 && spl > 0){ $("#dice_distribution_points_sp").html(++bohater.sp); $("#dice_distribution_points_left").html(--spl); } });
	
	$("#plus_bd").click(function(){ if (bohater.bd < 19 && spl > 0){ $("#dice_distribution_points_bd").html(++bohater.bd); $("#dice_distribution_points_left").html(--spl); } });
	
	$("#minus_zr").click(function(){ if (bohater.zr > 4){ $("#dice_distribution_points_zr").html(--bohater.zr); $("#dice_distribution_points_left").html(++spl); } });
	
	$("#minus_pc").click(function(){ if (bohater.pc > 4){ $("#dice_distribution_points_pc").html(--bohater.pc); $("#dice_distribution_points_left").html(++spl); } });
	
	$("#minus_ch").click(function(){ if (bohater.ch > 4){ $("#dice_distribution_points_ch").html(--bohater.ch); $("#dice_distribution_points_left").html(++spl); }; });
	
	$("#minus_sp").click(function(){ if (bohater.sp > 4){ $("#dice_distribution_points_sp").html(--bohater.sp); $("#dice_distribution_points_left").html(++spl); } });
	
	$("#minus_bd").click(function(){ if (bohater.bd > 4){ $("#dice_distribution_points_bd").html(--bohater.bd); $("#dice_distribution_points_left").html(++spl); } });
	
	
	// ---------------------------------- WSPÓŁCZYNNIKI - WYLOSOWANE --------------------------------------------
	$("#r_submit_but").hide();
	$("#r_final").hide();
	
	var r_num = [0,0,0,0,0];
	
	while(true){
		for (var i = 0; i<5; i++)
			r_num[i] = Math.ceil(Math.random() * 14 + 6);
		temp = (r_num[0] + r_num[1] + r_num[2] + r_num[3] + r_num[4])/5;
		if(temp>=10 && temp<=16) break;
	}
	
	$("#r_zr_1").html(r_num[0]);$("#r_pc_1").html(r_num[0]);$("#r_ch_1").html(r_num[0]);$("#r_sp_1").html(r_num[0]);$("#r_bd_1").html(r_num[0]);
	$("#r_zr_2").html(r_num[1]);$("#r_pc_2").html(r_num[1]);$("#r_ch_2").html(r_num[1]);$("#r_sp_2").html(r_num[1]);$("#r_bd_2").html(r_num[1]);
	$("#r_zr_3").html(r_num[2]);$("#r_pc_3").html(r_num[2]);$("#r_ch_3").html(r_num[2]);$("#r_sp_3").html(r_num[2]);$("#r_bd_3").html(r_num[2]);
	$("#r_zr_4").html(r_num[3]);$("#r_pc_4").html(r_num[3]);$("#r_ch_4").html(r_num[3]);$("#r_sp_4").html(r_num[3]);$("#r_bd_4").html(r_num[3]);
	$("#r_zr_5").html(r_num[4]);$("#r_pc_5").html(r_num[4]);$("#r_ch_5").html(r_num[4]);$("#r_sp_5").html(r_num[4]);$("#r_bd_5").html(r_num[4]);
	
	function r_reset_1(){ $("#r_zr_1").hide(); $("#r_pc_1").hide(); $("#r_ch_1").hide(); $("#r_sp_1").hide(); $("#r_bd_1").hide(); };
	function r_reset_2(){ $("#r_zr_2").hide(); $("#r_pc_2").hide(); $("#r_ch_2").hide(); $("#r_sp_2").hide(); $("#r_bd_2").hide(); };
	function r_reset_3(){ $("#r_zr_3").hide(); $("#r_pc_3").hide(); $("#r_ch_3").hide(); $("#r_sp_3").hide(); $("#r_bd_3").hide(); };
	function r_reset_4(){ $("#r_zr_4").hide(); $("#r_pc_4").hide(); $("#r_ch_4").hide(); $("#r_sp_4").hide(); $("#r_bd_4").hide(); };
	function r_reset_5(){ $("#r_zr_5").hide(); $("#r_pc_5").hide(); $("#r_ch_5").hide(); $("#r_sp_5").hide(); $("#r_bd_5").hide(); };
	
	function r_reset_zr(){ $("#r_zr_1").hide(); $("#r_zr_2").hide(); $("#r_zr_3").hide(); $("#r_zr_4").hide(); $("#r_zr_5").hide(); $("#r_cont_1").hide(); $("#r_cont_2").show(); };
	function r_reset_pc(){ $("#r_pc_1").hide(); $("#r_pc_2").hide(); $("#r_pc_3").hide(); $("#r_pc_4").hide(); $("#r_pc_5").hide(); $("#r_cont_2").hide(); $("#r_cont_3").show(); };
	function r_reset_ch(){ $("#r_ch_1").hide(); $("#r_ch_2").hide(); $("#r_ch_3").hide(); $("#r_ch_4").hide(); $("#r_ch_5").hide(); $("#r_cont_3").hide(); $("#r_cont_4").show(); };
	function r_reset_sp(){ $("#r_sp_1").hide(); $("#r_sp_2").hide(); $("#r_sp_3").hide(); $("#r_sp_4").hide(); $("#r_sp_5").hide(); $("#r_cont_4").hide(); $("#r_cont_5").show(); };
	function r_reset_bd(){ $("#r_bd_1").hide(); $("#r_bd_2").hide(); $("#r_bd_3").hide(); $("#r_bd_4").hide(); $("#r_bd_5").hide(); $("#r_cont_5").hide(); };
	
	$(".dice_random_stat_container").hide(); $("#r_cont_1").show();
	
	$("#r_zr_1").click(function(){ r_reset_1(); r_reset_zr(); $("#r_zr_1").show(); $("#r_zr_1").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.zr = r_num[0]; $("#r_final_zr").html(bohater.zr); });
	$("#r_zr_2").click(function(){ r_reset_2(); r_reset_zr(); $("#r_zr_2").show(); $("#r_zr_2").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.zr = r_num[1]; $("#r_final_zr").html(bohater.zr); });
	$("#r_zr_3").click(function(){ r_reset_3(); r_reset_zr(); $("#r_zr_3").show(); $("#r_zr_3").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.zr = r_num[2]; $("#r_final_zr").html(bohater.zr); });
	$("#r_zr_4").click(function(){ r_reset_4(); r_reset_zr(); $("#r_zr_4").show(); $("#r_zr_4").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.zr = r_num[3]; $("#r_final_zr").html(bohater.zr); });
	$("#r_zr_5").click(function(){ r_reset_5(); r_reset_zr(); $("#r_zr_5").show(); $("#r_zr_5").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.zr = r_num[4]; $("#r_final_zr").html(bohater.zr); });
	
	$("#r_pc_1").click(function(){ r_reset_1(); r_reset_pc(); $("#r_pc_1").show(); $("#r_pc_1").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.pc = r_num[0]; $("#r_final_pc").html(bohater.pc); });
	$("#r_pc_2").click(function(){ r_reset_2(); r_reset_pc(); $("#r_pc_2").show(); $("#r_pc_2").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.pc = r_num[1]; $("#r_final_pc").html(bohater.pc); });
	$("#r_pc_3").click(function(){ r_reset_3(); r_reset_pc(); $("#r_pc_3").show(); $("#r_pc_3").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.pc = r_num[2]; $("#r_final_pc").html(bohater.pc); });
	$("#r_pc_4").click(function(){ r_reset_4(); r_reset_pc(); $("#r_pc_4").show(); $("#r_pc_4").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.pc = r_num[3]; $("#r_final_pc").html(bohater.pc); });
	$("#r_pc_5").click(function(){ r_reset_5(); r_reset_pc(); $("#r_pc_5").show(); $("#r_pc_5").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.pc = r_num[4]; $("#r_final_pc").html(bohater.pc); });
	
	$("#r_ch_1").click(function(){ r_reset_1(); r_reset_ch(); $("#r_ch_1").show(); $("#r_ch_1").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.ch = r_num[0]; $("#r_final_ch").html(bohater.ch); });
	$("#r_ch_2").click(function(){ r_reset_2(); r_reset_ch(); $("#r_ch_2").show(); $("#r_ch_2").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.ch = r_num[1]; $("#r_final_ch").html(bohater.ch); });
	$("#r_ch_3").click(function(){ r_reset_3(); r_reset_ch(); $("#r_ch_3").show(); $("#r_ch_3").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.ch = r_num[2]; $("#r_final_ch").html(bohater.ch); });
	$("#r_ch_4").click(function(){ r_reset_4(); r_reset_ch(); $("#r_ch_4").show(); $("#r_ch_4").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.ch = r_num[3]; $("#r_final_ch").html(bohater.ch); });
	$("#r_ch_5").click(function(){ r_reset_5(); r_reset_ch(); $("#r_ch_5").show(); $("#r_ch_5").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.ch = r_num[4]; $("#r_final_ch").html(bohater.ch); });
	
	$("#r_sp_1").click(function(){ r_reset_1(); r_reset_sp(); $("#r_sp_1").show(); $("#r_sp_1").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.sp = r_num[0]; $("#r_final_sp").html(bohater.sp); });
	$("#r_sp_2").click(function(){ r_reset_2(); r_reset_sp(); $("#r_sp_2").show(); $("#r_sp_2").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.sp = r_num[1]; $("#r_final_sp").html(bohater.sp); });
	$("#r_sp_3").click(function(){ r_reset_3(); r_reset_sp(); $("#r_sp_3").show(); $("#r_sp_3").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.sp = r_num[2]; $("#r_final_sp").html(bohater.sp); });
	$("#r_sp_4").click(function(){ r_reset_4(); r_reset_sp(); $("#r_sp_4").show(); $("#r_sp_4").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.sp = r_num[3]; $("#r_final_sp").html(bohater.sp); });
	$("#r_sp_5").click(function(){ r_reset_5(); r_reset_sp(); $("#r_sp_5").show(); $("#r_sp_5").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.sp = r_num[4]; $("#r_final_sp").html(bohater.sp); });
	
	$("#r_bd_1").click(function(){ r_reset_1(); r_reset_bd(); $("#r_bd_1").show(); $("#r_bd_1").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.bd = r_num[0]; $("#r_final_bd").html(bohater.bd); });
	$("#r_bd_2").click(function(){ r_reset_2(); r_reset_bd(); $("#r_bd_2").show(); $("#r_bd_2").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.bd = r_num[1]; $("#r_final_bd").html(bohater.bd); });
	$("#r_bd_3").click(function(){ r_reset_3(); r_reset_bd(); $("#r_bd_3").show(); $("#r_bd_3").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.bd = r_num[2]; $("#r_final_bd").html(bohater.bd); });
	$("#r_bd_4").click(function(){ r_reset_4(); r_reset_bd(); $("#r_bd_4").show(); $("#r_bd_4").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.bd = r_num[3]; $("#r_final_bd").html(bohater.bd); });
	$("#r_bd_5").click(function(){ r_reset_5(); r_reset_bd(); $("#r_bd_5").show(); $("#r_bd_5").css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); bohater.bd = r_num[4]; $("#r_final_bd").html(bohater.bd); });
	
	$("#r_reset_but").click(function(){ 
		$(".dice_tostat_pick").show();
		$(".dice_tostat_pick").css({'background-image': 'url("style/img/tile1.png")'});
		$(".dice_random_stat_container").hide();
		$("#r_cont_1").show();
		$(".r_final_value").html("??");
		bohater.zr = 0; bohater.pc = 0; bohater.ch = 0; bohater.sp = 0; bohater.bd = 0;
	});
	
// CHOROBA - LOSOWANIE ----------------------------------------------------------
	switch(Math.ceil(Math.random() * 20)){
		case 1:
		bohater.choroba = "Zwapnienie płuc";
		bohater.lek = "-caloium";
		break;
		
		case 2:
		bohater.choroba = "Gorączka sobotniej nocy";
		bohater.lek = "Valapren";
		break;
		
		case 3:
		bohater.choroba = "Przewlekła gorączka krwotoczna";
		bohater.lek = "Ebokiller";
		break;
		
		case 4:
		bohater.choroba = "Mount Rushmore";
		bohater.lek = "Tubokuraryna, ...";
		break;
		
		case 5:
		bohater.choroba = "Syndrom Obcego";
		bohater.lek = "Pinto";
		break;
		
		case 6:
		bohater.choroba = "Chore nery";
		bohater.lek = "Uregyt, kwas foliowy i preparaty żelaza";
		break;
		
		case 7:
		bohater.choroba = "Alergia";
		bohater.lek = "Leki przeciwhistaminowe";
		break;
		
		case 8:
		bohater.choroba = "Szaleństwo bostońskie";
		bohater.lek = "Alef, Bet i Gimel";
		break;
		
		case 9:
		bohater.choroba = "Syndrom Thurmana";
		bohater.lek = "Reminex";
		break;
		
		case 10:
		bohater.choroba = "Drgawki";
		bohater.lek = "Relanium";
		break;
		
		case 11:
		bohater.choroba = "Hemofilia";
		bohater.lek = "Krioprecypitat";
		break;
		
		case 12:
		bohater.choroba = "Drętwota Hollywood";
		bohater.lek = "Mallonix";
		break;
		
		case 13:
		bohater.choroba = "Osteoporoza";
		bohater.lek = "Wapniak";
		break;
		
		case 14:
		bohater.choroba = "Zawroty głowy";
		bohater.lek = "Actinix i Rephidal";
		break;
		
		case 15:
		bohater.choroba = "Niewydolność krążenia";
		bohater.lek = "Aspiryna";
		break;
		
		case 16:
		bohater.choroba = "Anemia";
		bohater.lek = "Preparaty krwiotwórcze";
		break;
		
		case 17:
		bohater.choroba = "Morbus Dexteri";
		bohater.lek = "Memoral";
		break;
		
		case 18:
		bohater.choroba = "Syndrom Draculi";
		bohater.lek = "Dracophen";
		break;
		
		case 19:
		bohater.choroba = "Zespół wirusowej choroby języka";
		bohater.lek = "AVDTS";
		break;
		
		case 20:
		bohater.choroba = "Paranoja";
		bohater.lek = "Psychotropy";
		break;	
	}
	$("#karta_choroba").html(bohater.choroba);
	$("#karta_lek").html(bohater.lek);

// UMIEJĘTNOŚCI ---------------------------------------------------------------------------------------------------------------------

	var ww = [0,0,0,'Wojownik'];
	var bs = [0,0,0,'Wojownik'];
	var bd = [0,0,0,'Wojownik','Ranger'];
	var pp = [0,0,0,'Technik'];
	var zm = [0,0,0,'Cwaniak'];
	var ot = [0,0,0,'Ranger'];
	var sg = [0,0,0,'Ranger'];
	var ka = [0,0,0,'Ranger','Cwaniak'];
	var pr = [0,0,0,'Ranger'];
	var ng = [0,0,0,'Cwaniak'];
	var em = [0,0,0,'Cwaniak'];
	var sw = [0,0,0,'Wojownik'];
	var me = [0,0,0,'Technik','Ranger'];
	var te = [0,0,0,'Technik'];
	var wo = [0,0,0,'Technik'];
	var sp = [0,0,0,'Technik'];
	var pt = [0,0,0,'Wojownik','Technik'];
	var sn = [0,0,0,'Ranger'];
	var jd = [0,0,0,'Ranger'];
	
	
	var x1, x2, x3, x4, x5, pakiet_test = 0;
	// Function checks state of points before adding/subtracting point in order to check later if packed was activated or deactivated
	function pakiet_check1(x1,x2,x3){
		if ((x1 > 0 && x2 > 0 && x3 == 0) || (x1 > 0 && x2 == 0 && x3 > 0) || (x1 == 0 && x2 > 0 && x3 > 0)) pakiet_test = 1;
		if (x1 > 0 && x2 > 0 && x3 > 0) pakiet_test = 2;
	}
	// Function checks state of points after adding/subtracting point in order to change number of points if packet was activated or deactivated
	function pakiet_check2(x1,x2,x3){
		if (x1 > 0 && x2 > 0 && x3 > 0 && pakiet_test == 1) {
			pakiet_test = 0;
			return y_temp += 4;
		}
		if (((x1 > 0 && x2 > 0 && x3 == 0) || (x1 > 0 && x2 == 0 && x3 > 0) || (x1 == 0 && x2 > 0 && x3 > 0)) && pakiet_test == 2) {
			pakiet_test = 0;
			return y_temp -= 4;
		}
		pakiet_test = 0;
	}
	// Function determines the amount of points needed to add point to skill based on actual value of skill
	function points_left_add(x) {
		if (x==0) return y_temp-=3;
		for(var i = 1; i<20; i++)
			if (x==i) return y_temp-=i+1;              
	}
	// Function determines the amount of points needed to subtract point from skill based on actual value of skill
	function points_left_subtract(x) {
		if (x==1) return y_temp+=3;
		for(var i = 2; i<20; i++)
			if (x==i) return y_temp+=i;
	}
	// This function starts when you are trying to add a point
	function add_point(x1,x2,x3,x4,x5){
		y_temp = 0;
		points_left_add(x1); // determining the amount of points needed to add a point to a skill
		pakiet_check1(x1,x2,x3); // checking if packet was activated/deactivated
		x1++;
		pakiet_check2(x1,x2,x3);
		
		if (bohater.specjalizacja == x4 || bohater.specjalizacja == x5) { // used when skill is from spec
			temp = y + y_spec + y_temp; // calculating if we have enough points
			if (temp < 0) return --x1; // we don't have enough points
			y_spec += y_temp;
			if (y_spec < 0) { guos -= y_spec; y += y_spec; y_spec = 0; } // when spec pool is < 0
		}
		else { // used when skill is not from spec
			temp = y + y_temp;
			if (temp < 0) return --x1;
			y += y_temp;
		}
		$("#skills_points").html(y);
		$("#skills_points_spec").html(y_spec);
		return x1;
	}
	// This function starts when you are trying to subtract a point
	function subtract_point(x1,x2,x3,x4,x5){
		y_temp = 0;
		points_left_subtract(x1); // determining tha amount of points needed from spec and all points combined
		pakiet_check1(x1,x2,x3); // checking if packet deactivated
		x1--;
		pakiet_check2(x1,x2,x3);
		
		if (bohater.specjalizacja == x4 || bohater.specjalizacja == x5) { // this part activates when skill is from spec
			temp = y + y_spec + y_temp; // temp = amount of points - points needed to subtract point
			if (temp < 0) return ++x1; // not enough points
			
			while (guos > 0 && y_temp > 0){ // guos - global used on spec - functions created to return points from spec skill to golobal pool when ealier it was used from global pool and not from skill pool 
				guos--;
				y_temp--;
				y++;
			}
			y_spec += y_temp; // subtracting points from spec pool
			if (y_spec < 0) { y += y_spec; y_spec = 0; } // if spec pool < 0 then subtract points from global pool
		}
		else { // part used when skill isn't from spec
			temp = y + y_temp;
			if (temp < 0) return ++x1;
			y += y_temp;
		}
		$("#skills_points").html(y);
		$("#skills_points_spec").html(y_spec);
		if (x1<0) x1=0;
		y_temp = 0;
		return x1;
	}
	
	// ------------------ WALKA WRĘCZ ----------------------
	$("#plus_ww1").click(function(){ $("#karta_ww1, #skill_value_ww1").html(ww[0] = add_point(ww[0],ww[1],ww[2],ww[3],ww[4])); });
	$("#minus_ww1").click(function(){ 
	if (ww[0] != 2 || ph_choice != "ww")
		$("#karta_ww1, #skill_value_ww1").html(ww[0] = subtract_point(ww[0],ww[1],ww[2],ww[3],ww[4])); });
	$("#plus_ww2").click(function(){ $("#karta_ww2, #skill_value_ww2").html(ww[1] = add_point(ww[1],ww[0],ww[2],ww[3],ww[4])); });
	$("#minus_ww2").click(function(){ 
	if (ww[1] != 2 || ph_choice != "ww")
		$("#karta_ww2, #skill_value_ww2").html(ww[1] = subtract_point(ww[1],ww[0],ww[2],ww[3],ww[4])); });
	$("#plus_ww3").click(function(){ $("#karta_ww3, #skill_value_ww3").html(ww[2] = add_point(ww[2],ww[0],ww[1],ww[3],ww[4])); });
	$("#minus_ww3").click(function(){ 
	if (ww[2] != 2 || ph_choice != "ww")
		$("#karta_ww3, #skill_value_ww3").html(ww[2] = subtract_point(ww[2],ww[0],ww[1],ww[3],ww[4])); });
	// ------------------ BROŃ STRZELECKA ----------------------
	$("#plus_bs1").click(function(){ $("#karta_bs1, #skill_value_bs1").html(bs[0] = add_point(bs[0],bs[1],bs[2],bs[3],bs[4])); });
	$("#minus_bs1").click(function(){ 
	if (bs[0] != 2 || ph_choice != "bs")
		$("#karta_bs1, #skill_value_bs1").html(bs[0] = subtract_point(bs[0],bs[1],bs[2],bs[3],bs[4])); });
	$("#plus_bs2").click(function(){ $("#karta_bs2, #skill_value_bs2").html(bs[1] = add_point(bs[1],bs[0],bs[2],bs[3],bs[4])); });
	$("#minus_bs2").click(function(){ 
	if (bs[1] != 2 || ph_choice != "bs")
		$("#karta_bs2, #skill_value_bs2").html(bs[1] = subtract_point(bs[1],bs[0],bs[2],bs[3],bs[4])); });
	$("#plus_bs3").click(function(){ $("#karta_bs3, #skill_value_bs3").html(bs[2] = add_point(bs[2],bs[0],bs[1],bs[3],bs[4])); });
	$("#minus_bs3").click(function(){ 
	if (bs[2] != 2 || ph_choice != "bs")
		$("#karta_bs3, #skill_value_bs3").html(bs[2] = subtract_point(bs[2],bs[0],bs[1],bs[3],bs[4])); });
	// ------------------ BROŃ DYSTANSOWA ----------------------
	$("#plus_bd1").click(function(){ $("#karta_bd1, #skill_value_bd1").html(bd[0] = add_point(bd[0],bd[1],bd[2],bd[3],bd[4])); });
	$("#minus_bd1").click(function(){ 
	if (bd[0] != 2 || ph_choice != "bd")
		$("#karta_bd1, #skill_value_bd1").html(bd[0] = subtract_point(bd[0],bd[1],bd[2],bd[3],bd[4])); });
	$("#plus_bd2").click(function(){ $("#karta_bd2, #skill_value_bd2").html(bd[1] = add_point(bd[1],bd[0],bd[2],bd[3],bd[4])); });
	$("#minus_bd2").click(function(){ 
	if (bd[1] != 2 || ph_choice != "bd")
		$("#karta_bd2, #skill_value_bd2").html(bd[1] = subtract_point(bd[1],bd[0],bd[2],bd[3],bd[4])); });
	$("#plus_bd3").click(function(){ $("#karta_bd3, #skill_value_bd3").html(bd[2] = add_point(bd[2],bd[0],bd[1],bd[3],bd[4])); });
	$("#minus_bd3").click(function(){ 
	if (bd[2] != 2 || ph_choice != "bd")
		$("#karta_bd3, #skill_value_bd3").html(bd[2] = subtract_point(bd[2],bd[0],bd[1],bd[3],bd[4])); });
	// ------------------ PROWADZENIE POJAZDÓW ----------------------
	$("#plus_pp1").click(function(){ $("#karta_pp1, #skill_value_pp1").html(pp[0] = add_point(pp[0],pp[1],pp[2],pp[3],pp[4])); });
	$("#minus_pp1").click(function(){ $("#karta_pp1, #skill_value_pp1").html(pp[0] = subtract_point(pp[0],pp[1],pp[2],pp[3],pp[4])); });
	$("#plus_pp2").click(function(){ $("#karta_pp2, #skill_value_pp2").html(pp[1] = add_point(pp[1],pp[0],pp[2],pp[3],pp[4])); });
	$("#minus_pp2").click(function(){ $("#karta_pp2, #skill_value_pp2").html(pp[1] = subtract_point(pp[1],pp[0],pp[2],pp[3],pp[4])); });
	$("#plus_pp3").click(function(){ $("#karta_pp3, #skill_value_pp3").html(pp[2] = add_point(pp[2],pp[0],pp[1],pp[3],pp[4])); });
	$("#minus_pp3").click(function(){ $("#karta_pp3, #skill_value_pp3").html(pp[2] = subtract_point(pp[2],pp[0],pp[1],pp[3],pp[4])); });
	// ------------------ ZDOLNOŚCI MANUALNE ----------------------
	$("#plus_zm1").click(function(){ $("#karta_zm1, #skill_value_zm1").html(zm[0] = add_point(zm[0],zm[1],zm[2],zm[3],zm[4])); });
	$("#minus_zm1").click(function(){ 
	if (zm[0] != 2 || bohater.pochodzenie_cecha != "Hazardzista")
		$("#karta_zm1, #skill_value_zm1").html(zm[0] = subtract_point(zm[0],zm[1],zm[2],zm[3],zm[4])); });
	$("#plus_zm2").click(function(){ $("#karta_zm2, #skill_value_zm2").html(zm[1] = add_point(zm[1],zm[0],zm[2],zm[3],zm[4])); });
	$("#minus_zm2").click(function(){ 
	if (zm[1] != 2 || bohater.pochodzenie_cecha != "Hazardzista")
		$("#karta_zm2, #skill_value_zm2").html(zm[1] = subtract_point(zm[1],zm[0],zm[2],zm[3],zm[4])); });
	$("#plus_zm3").click(function(){ $("#karta_zm3, #skill_value_zm3").html(zm[2] = add_point(zm[2],zm[0],zm[1],zm[3],zm[4])); });
	$("#minus_zm3").click(function(){ 
	if (zm[2] != 2 || bohater.pochodzenie_cecha != "Hazardzista")
		$("#karta_zm3, #skill_value_zm3").html(zm[2] = subtract_point(zm[2],zm[0],zm[1],zm[3],zm[4])); });
	// ------------------ ORINTACJA W TERENIE ----------------------
	$("#plus_ot1").click(function(){ $("#karta_ot1, #skill_value_ot1").html(ot[0] = add_point(ot[0],ot[1],ot[2],ot[3],ot[4])); });
	$("#minus_ot1").click(function(){ $("#karta_ot1, #skill_value_ot1").html(ot[0] = subtract_point(ot[0],ot[1],ot[2],ot[3],ot[4])); });
	$("#plus_ot2").click(function(){ $("#karta_ot2, #skill_value_ot2").html(ot[1] = add_point(ot[1],ot[0],ot[2],ot[3],ot[4])); });
	$("#minus_ot2").click(function(){ $("#karta_ot2, #skill_value_ot2").html(ot[1] = subtract_point(ot[1],ot[0],ot[2],ot[3],ot[4])); });
	$("#plus_ot3").click(function(){ $("#karta_ot3, #skill_value_ot3").html(ot[2] = add_point(ot[2],ot[0],ot[1],ot[3],ot[4])); });
	$("#minus_ot3").click(function(){ $("#karta_ot3, #skill_value_ot3").html(ot[2] = subtract_point(ot[2],ot[0],ot[1],ot[3],ot[4])); });
	// ------------------ SPOSTRZEGAWCZOŚĆ ----------------------
	$("#plus_sg1").click(function(){ $("#karta_sg1, #skill_value_sg1").html(sg[0] = add_point(sg[0],sg[1],sg[2],sg[3],sg[4])); });
	$("#minus_sg1").click(function(){ $("#karta_sg1, #skill_value_sg1").html(sg[0] = subtract_point(sg[0],sg[1],sg[2],sg[3],sg[4])); });
	$("#plus_sg2").click(function(){ $("#karta_sg2, #skill_value_sg2").html(sg[1] = add_point(sg[1],sg[0],sg[2],sg[3],sg[4])); });
	$("#minus_sg2").click(function(){ $("#karta_sg2, #skill_value_sg2").html(sg[1] = subtract_point(sg[1],sg[0],sg[2],sg[3],sg[4])); });
	$("#plus_sg3").click(function(){ $("#karta_sg3, #skill_value_sg3").html(sg[2] = add_point(sg[2],sg[0],sg[1],sg[3],sg[4])); });
	$("#minus_sg3").click(function(){ $("#karta_sg3, #skill_value_sg3").html(sg[2] = subtract_point(sg[2],sg[0],sg[1],sg[3],sg[4])); });
	// ------------------ KAMUFLAŻ ----------------------
	$("#plus_ka1").click(function(){ $("#karta_ka1, #skill_value_ka1").html(ka[0] = add_point(ka[0],ka[1],ka[2],ka[3],ka[4])); });
	$("#minus_ka1").click(function(){ $("#karta_ka1, #skill_value_ka1").html(ka[0] = subtract_point(ka[0],ka[1],ka[2],ka[3],ka[4])); });
	$("#plus_ka2").click(function(){ $("#karta_ka2, #skill_value_ka2").html(ka[1] = add_point(ka[1],ka[0],ka[2],ka[3],ka[4])); });
	$("#minus_ka2").click(function(){ $("#karta_ka2, #skill_value_ka2").html(ka[1] = subtract_point(ka[1],ka[0],ka[2],ka[3],ka[4])); });
	$("#plus_ka3").click(function(){ $("#karta_ka3, #skill_value_ka3").html(ka[2] = add_point(ka[2],ka[0],ka[1],ka[3],ka[4])); });
	$("#minus_ka3").click(function(){ $("#karta_ka3, #skill_value_ka3").html(ka[2] = subtract_point(ka[2],ka[0],ka[1],ka[3],ka[4])); });
	// ------------------ PRZETRWANIE ----------------------
	$("#plus_pr1").click(function(){ $("#karta_pr1, #skill_value_pr1").html(pr[0] = add_point(pr[0],pr[1],pr[2],pr[3],pr[4])); });
	$("#minus_pr1").click(function(){ $("#karta_pr1, #skill_value_pr1").html(pr[0] = subtract_point(pr[0],pr[1],pr[2],pr[3],pr[4])); });
	$("#plus_pr2").click(function(){ $("#karta_pr2, #skill_value_pr2").html(pr[1] = add_point(pr[1],pr[0],pr[2],pr[3],pr[4])); });
	$("#minus_pr2").click(function(){ $("#karta_pr2, #skill_value_pr2").html(pr[1] = subtract_point(pr[1],pr[0],pr[2],pr[3],pr[4])); });
	$("#plus_pr3").click(function(){ $("#karta_pr3, #skill_value_pr3").html(pr[2] = add_point(pr[2],pr[0],pr[1],pr[3],pr[4])); });
	$("#minus_pr3").click(function(){ $("#karta_pr3, #skill_value_pr3").html(pr[2] = subtract_point(pr[2],pr[0],pr[1],pr[3],pr[4])); });
	// ------------------ NEGOCJACJE ----------------------
	$("#plus_ng1").click(function(){ $("#karta_ng1, #skill_value_ng1").html(ng[0] = add_point(ng[0],ng[1],ng[2],ng[3],ng[4])); });
	$("#minus_ng1").click(function(){ 
	if (ng[0] != 2 || fa_choice != "ng")
		$("#karta_ng1, #skill_value_ng1").html(ng[0] = subtract_point(ng[0],ng[1],ng[2],ng[3],ng[4])); });
	$("#plus_ng2").click(function(){ $("#karta_ng2, #skill_value_ng2").html(ng[1] = add_point(ng[1],ng[0],ng[2],ng[3],ng[4])); });
	$("#minus_ng2").click(function(){ 
	if (ng[1] != 2 || fa_choice != "ng")
		$("#karta_ng2, #skill_value_ng2").html(ng[1] = subtract_point(ng[1],ng[0],ng[2],ng[3],ng[4])); });
	$("#plus_ng3").click(function(){ $("#karta_ng3, #skill_value_ng3").html(ng[2] = add_point(ng[2],ng[0],ng[1],ng[3],ng[4])); });
	$("#minus_ng3").click(function(){ 
	if (ng[2] != 2 || fa_choice != "ng")
		$("#karta_ng3, #skill_value_ng3").html(ng[2] = subtract_point(ng[2],ng[0],ng[1],ng[3],ng[4])); });
	// ------------------ EMPATIA ----------------------
	$("#plus_em1").click(function(){ $("#karta_em1, #skill_value_em1").html(em[0] = add_point(em[0],em[1],em[2],em[3],em[4])); });
	$("#minus_em1").click(function(){ 
	if (em[0] != 2 || fa_choice != "em")
		$("#karta_em1, #skill_value_em1").html(em[0] = subtract_point(em[0],em[1],em[2],em[3],em[4])); });
	$("#plus_em2").click(function(){ $("#karta_em2, #skill_value_em2").html(em[1] = add_point(em[1],em[0],em[2],em[3],em[4])); });
	$("#minus_em2").click(function(){ 
	if (em[1] != 2 || fa_choice != "em")
		$("#karta_em2, #skill_value_em2").html(em[1] = subtract_point(em[1],em[0],em[2],em[3],em[4])); });
	$("#plus_em3").click(function(){ $("#karta_em3, #skill_value_em3").html(em[2] = add_point(em[2],em[0],em[1],em[3],em[4])); });
	$("#minus_em3").click(function(){ 
	if (em[2] != 2 || fa_choice != "em")
		$("#karta_em3, #skill_value_em3").html(em[2] = subtract_point(em[2],em[0],em[1],em[3],em[4])); });
	// ------------------ SIŁA WOLI ----------------------
	$("#plus_sw1").click(function(){ $("#karta_sw1, #skill_value_sw1").html(sw[0] = add_point(sw[0],sw[1],sw[2],sw[3],sw[4])); });
	$("#minus_sw1").click(function(){ 
	if (sw[0] != 2 || ph_choice != "sw")
		$("#karta_sw1, #skill_value_sw1").html(sw[0] = subtract_point(sw[0],sw[1],sw[2],sw[3],sw[4])); 
	else if (sw[0] != 2 || fa_choice != "sw")
		$("#karta_sw3, #skill_value_sw3").html(sw[0] = subtract_point(sw[2],sw[0],sw[1],sw[3],sw[4])); });
	$("#plus_sw2").click(function(){ $("#karta_sw2, #skill_value_sw2").html(sw[1] = add_point(sw[1],sw[0],sw[2],sw[3],sw[4])); });
	$("#minus_sw2").click(function(){ 
	if (sw[1] != 2 || ph_choice != "sw")
		$("#karta_sw2, #skill_value_sw2").html(sw[1] = subtract_point(sw[1],sw[0],sw[2],sw[3],sw[4])); 
	else if (sw[1] != 2 || fa_choice != "sw")
		$("#karta_sw3, #skill_value_sw3").html(sw[1] = subtract_point(sw[2],sw[0],sw[1],sw[3],sw[4])); });
	$("#plus_sw3").click(function(){ $("#karta_sw3, #skill_value_sw3").html(sw[2] = add_point(sw[2],sw[0],sw[1],sw[3],sw[4])); });
	$("#minus_sw3").click(function(){ 
	if (sw[2] != 2 || ph_choice != "sw")
		$("#karta_sw3, #skill_value_sw3").html(sw[2] = subtract_point(sw[2],sw[0],sw[1],sw[3],sw[4])); 
	else if (sw[2] != 2 || fa_choice != "sw")
		$("#karta_sw3, #skill_value_sw3").html(sw[2] = subtract_point(sw[2],sw[0],sw[1],sw[3],sw[4])); });
	// ------------------ MEDYCYNA ----------------------
	$("#plus_me1").click(function(){ $("#karta_me1, #skill_value_me1").html(me[0] = add_point(me[0],me[1],me[2],me[3],me[4])); });
	$("#minus_me1").click(function(){ 
	if (me[0] != 4 || bohater.pochodzenie_cecha != "Doktor Quinn")
		$("#karta_me1, #skill_value_me1").html(me[0] = subtract_point(me[0],me[1],me[2],me[3],me[4])); });
	$("#plus_me2").click(function(){ $("#karta_me2, #skill_value_me2").html(me[1] = add_point(me[1],me[0],me[2],me[3],me[4])); });
	$("#minus_me2").click(function(){ 
	if (me[1] != 4 || bohater.pochodzenie_cecha != "Doktor Quinn")
		$("#karta_me2, #skill_value_me2").html(me[1] = subtract_point(me[1],me[0],me[2],me[3],me[4])); });
	$("#plus_me3").click(function(){ $("#karta_me3, #skill_value_me3").html(me[2] = add_point(me[2],me[0],me[1],me[3],me[4])); });
	$("#minus_me3").click(function(){ 
	if (me[2] != 4 || bohater.pochodzenie_cecha != "Doktor Quinn")
		$("#karta_me3, #skill_value_me3").html(me[2] = subtract_point(me[2],me[0],me[1],me[3],me[4])); });
	// ------------------ TECHNIKA ----------------------
	$("#plus_te1").click(function(){ $("#karta_te1, #skill_value_te1").html(te[0] = add_point(te[0],te[1],te[2],te[3],te[4])); });
	$("#minus_te1").click(function(){ $("#karta_te1, #skill_value_te1").html(te[0] = subtract_point(te[0],te[1],te[2],te[3],te[4])); });
	$("#plus_te2").click(function(){ $("#karta_te2, #skill_value_te2").html(te[1] = add_point(te[1],te[0],te[2],te[3],te[4])); });
	$("#minus_te2").click(function(){ $("#karta_te2, #skill_value_te2").html(te[1] = subtract_point(te[1],te[0],te[2],te[3],te[4])); });
	$("#plus_te3").click(function(){ $("#karta_te3, #skill_value_te3").html(te[2] = add_point(te[2],te[0],te[1],te[3],te[4])); });
	$("#minus_te3").click(function(){ $("#karta_te3, #skill_value_te3").html(te[2] = subtract_point(te[2],te[0],te[1],te[3],te[4])); });
	// ------------------ WIEDZA OGÓLNA ----------------------
	$("#plus_wo1").click(function(){ $("#karta_wo1, #skill_value_wo1").html(wo[0] = add_point(wo[0],wo[1],wo[2],wo[3],wo[4])); });
	$("#minus_wo1").click(function(){ $("#karta_wo1, #skill_value_wo1").html(wo[0] = subtract_point(wo[0],wo[1],wo[2],wo[3],wo[4])); });
	$("#plus_wo2").click(function(){ $("#karta_wo2, #_wo2").html(wo[1] = add_point(wo[1],wo[0],wo[2],wo[3],wo[4])); });
	$("#minus_wo2").click(function(){ $("#karta_wo2, #skill_value_wo2").html(wo[1] = subtract_point(wo[1],wo[0],wo[2],wo[3],wo[4])); });
	$("#plus_wo3").click(function(){ $("#karta_wo3, #skill_value_wo3").html(wo[2] = add_point(wo[2],wo[0],wo[1],wo[3],wo[4])); });
	$("#minus_wo3").click(function(){ $("#karta_wo3, #skill_value_wo3").html(wo[2] = subtract_point(wo[2],wo[0],wo[1],wo[3],wo[4])); });
	// ------------------ SPRZĘT ----------------------
	$("#plus_sp1").click(function(){ $("#karta_sp1, #skill_value_sp1").html(sp[0] = add_point(sp[0],sp[1],sp[2],sp[3],sp[4])); });
	$("#minus_sp1").click(function(){ $("#karta_sp1, #skill_value_sp1").html(sp[0] = subtract_point(sp[0],sp[1],sp[2],sp[3],sp[4])); });
	$("#plus_sp2").click(function(){ $("#karta_sp2, #skill_value_sp2").html(sp[1] = add_point(sp[1],sp[0],sp[2],sp[3],sp[4])); });
	$("#minus_sp2").click(function(){ $("#karta_sp2, #skill_value_sp2").html(sp[1] = subtract_point(sp[1],sp[0],sp[2],sp[3],sp[4])); });
	$("#plus_sp3").click(function(){ $("#karta_sp3, #skill_value_sp3").html(sp[2] = add_point(sp[2],sp[0],sp[1],sp[3],sp[4])); });
	$("#minus_sp3").click(function(){ $("#karta_sp3, #skill_value_sp3").html(sp[2] = subtract_point(sp[2],sp[0],sp[1],sp[3],sp[4])); });
	// ------------------ PIROTECHNIKA ----------------------
	$("#plus_pt1").click(function(){ $("#karta_pt1, #skill_value_pt1").html(pt[0] = add_point(pt[0],pt[1],pt[2],pt[3],pt[4])); });
	$("#minus_pt1").click(function(){ 
	if (pt[0] != 2 || ph_choice != "pt")
		$("#karta_pt1, #skill_value_pt1").html(pt[0] = subtract_point(pt[0],pt[1],pt[2],pt[3],pt[4])); });
	$("#plus_pt2").click(function(){ $("#karta_pt2, #skill_value_pt2").html(pt[1] = add_point(pt[1],pt[0],pt[2],pt[3],pt[4])); });
	$("#minus_pt2").click(function(){ 
	f (pt[1] != 2 || ph_choice != "pt")
		$("#karta_pt2, #skill_value_pt2").html(pt[1] = subtract_point(pt[1],pt[0],pt[2],pt[3],pt[4])); });
	$("#plus_pt3").click(function(){ $("#karta_pt3, #skill_value_pt3").html(pt[2] = add_point(pt[2],pt[0],pt[1],pt[3],pt[4])); });
	$("#minus_pt3").click(function(){ 
	f (pt[2] != 2 || ph_choice != "pt")
		$("#karta_pt3, #skill_value_pt3").html(pt[2] = subtract_point(pt[2],pt[0],pt[1],pt[3],pt[4])); });
	// ------------------ SPRAWNOŚĆ ----------------------
	$("#plus_sn1").click(function(){ $("#karta_sn1, #skill_value_sn1").html(sn[0] = add_point(sn[0],sn[1],sn[2],sn[3],sn[4])); });
	$("#minus_sn1").click(function(){ $("#karta_sn1, #skill_value_sn1").html(sn[0] = subtract_point(sn[0],sn[1],sn[2],sn[3],sn[4])); });
	$("#plus_sn2").click(function(){ $("#karta_sn2, #skill_value_sn2").html(sn[1] = add_point(sn[1],sn[0],sn[2],sn[3],sn[4])); });
	$("#minus_sn2").click(function(){ $("#karta_sn2, #skill_value_sn2").html(sn[1] = subtract_point(sn[1],sn[0],sn[2],sn[3],sn[4])); });
	$("#plus_sn3").click(function(){ $("#karta_sn3, #skill_value_sn3").html(sn[2] = add_point(sn[2],sn[0],sn[1],sn[3],sn[4])); });
	$("#minus_sn3").click(function(){ $("#karta_sn3, #skill_value_sn3").html(sn[2] = subtract_point(sn[2],sn[0],sn[1],sn[3],sn[4])); });
	// ------------------ JEŹDZIECTWO ----------------------
	$("#plus_jd1").click(function(){ $("#karta_jd1, #skill_value_jd1").html(jd[0] = add_point(jd[0],jd[1],jd[2],jd[3],jd[4])); });
	$("#minus_jd1").click(function(){ $("#karta_jd1, #skill_value_jd1").html(jd[0] = subtract_point(jd[0],jd[1],jd[2],jd[3],jd[4])); });
	$("#plus_jd2").click(function(){ $("#karta_jd2, #skill_value_jd2").html(jd[1] = add_point(jd[1],jd[0],jd[2],jd[3],jd[4])); });
	$("#minus_jd2").click(function(){ $("#karta_jd2, #skill_value_jd2").html(jd[1] = subtract_point(jd[1],jd[0],jd[2],jd[3],jd[4])); });
	$("#plus_jd3").click(function(){ $("#karta_jd3, #skill_value_jd3").html(jd[2] = add_point(jd[2],jd[0],jd[1],jd[3],jd[4])); });
	$("#minus_jd3").click(function(){ $("#karta_jd3, #skill_value_jd3").html(jd[2] = subtract_point(jd[2],jd[0],jd[1],jd[3],jd[4])); });
	
	// SZTUCZKI --------------------------------------------------------------------------------------
	function show_sztuczki() { // function shows all avaliable sztuczki for picking at given moment
		$(".sztuczki_exmpl").hide();
		if (te[0] > 2 && pt[2] > 2) { $("#s_bum").show(); };
		if (bohater.zr+bohater.d_zr > 13 && ww[1] > 4) { $("#s_aramis").show(); };
		if (sn[1] > 1) { $("#s_asekuracja").show(); };
		if (me[1] > 3 && em[1] > 2) { $("#s_aspiryna").show(); };
		if (ww[0] > 4 && bohater.bd+bohater.d_bd > 13) { $("#s_barbarka").show(); };
		if (sw[0] > 5 && bohater.bd+bohater.d_bd > 11) { $("#s_berserker").show(); };
		if (sn[0] > 3) { $("#s_bezoddechu").show(); };
		if (bohater.zr+bohater.d_zr > 9 && sn[1] > 5) { $("#s_bezsprzetu").show(); };
		if (bs[0] > 2 && bohater.zr+bohater.d_zr > 12 &&bohater.pc+bohater.d_pc > 11) { $("#s_bezsznurków").show(); };
		if (sn[2] > 2 && bohater.bd+bohater.d_bd > 11) { $("#s_bieg").show(); };
		if (bohater.ch+bohater.d_ch > 7 && em[2] > 3) { $("#s_bierzgo").show(); };
		if (ww[1] > 4 && bohater.zr+bohater.d_zr > 11) { $("#s_boa").show(); };
		if (em[1] > 1 && ng[0] > 1 && zm[1] > 1 && bohater.sp+bohater.d_sp > 9 ) { $("#s_casanova").show(); };
		if (bohater.sp+bohater.d_sp > 13) { $("#s_chlodnymokiem").show(); };
		if (ka[0] > 5) { $("#s_ciszej").show(); };
		if (bohater.pc+bohater.d_pc > 7 && sw[2] > 2) { $("#s_czlowiek").show(); };
		if ((sp[0] > 2 || sp[1] > 2) && em[2] > 1) { $("#s_czterejpancerni").show(); };
		if (bohater.pc+bohater.d_pc > 13 && bs[2] > 3) { $("#s_czuly").show(); };
		if (bohater.bd+bohater.d_bd > 11 && bd[1] > 8) { $("#s_dalszy").show(); };
		if (bd[2] > 3) { $("#s_dawid").show(); };
		if (bd[0] > 8 && bohater.bd+bohater.d_bd > 11) { $("#s_dluzszystrzal").show(); };
		if (bohater.sp+bohater.d_sp > 11) { $("#s_dobryizlyglina").show(); };
		if (bohater.zr+bohater.d_zr > 11 && (bs[0] > 4 || ww[1] > 4)) { $("#s_dobywanie").show(); };
		if (bohater.bd+bohater.d_bd > 12 && sn[2] > 3) { $("#s_domnaplecach").show(); };
		if (bohater.bd+bohater.d_bd > 11 && sn[2] > 4) { $("#s_doswiadczony").show(); };
		if (bohater.bd+bohater.d_bd > 9 && ww[2] > 5) { $("#s_dystans").show(); };
		if (sn[2] > 2) { $("#s_dziswszystko").show(); };
		if (sn[2] > 2 && ww[0] > 3) { $("#s_flash").show(); };
		if (ww[0] > 3 && bohater.bd+bohater.d_bd > 11) { $("#s_garda").show(); };
		if (bohater.bd+bohater.d_bd > 11 && ot[2] > 2) { $("#s_glaz").show(); };
		if (zm[1] > 3) { $("#s_golareka").show(); };
		if (bohater.sp+bohater.d_sp > 9 && ng[0] > 8) { $("#s_granienanerwach").show(); };
		if (bs[0] > 3 && bohater.zr+bohater.d_zr > 13) { $("#s_gunfight").show(); };
		if (zm[1] > 3) { $("#s_hokuspokus").show(); };
		if (me[1] > 3 && bohater.bd+bohater.d_bd > 11) { $("#s_immunitet").show(); };
		if (ng[2] > 2) { $("#s_inspiracja").show(); };
		if (em[1] > 5 && bohater.ch+bohater.d_ch > 15) { $("#s_jestzajebiscie").show(); };
		if (bohater.sp+bohater.d_sp > 11 && ot[0] > 3) { $("#s_kanaly").show(); };
		if (bohater.zr+bohater.d_zr > 13 && sg[2] > 2) { $("#s_komandos").show(); };
		if (ww[0] > 3 && bohater.zr+bohater.d_zr > 13 && bohater.bd+bohater.d_bd > 7) { $("#s_kopzobrotu").show(); };
		if (sn[1] > 3 && bohater.zr+bohater.d_zr > 11) { $("#s_kot").show(); };
		if (zm[0] > 1 && ka[1] > 1) { $("#s_kradziezwtlumie").show(); };
		if (ka[1] > 4 && pr[0] > 1) { $("#s_lesnydiabel").show(); };
		if (bd[1] > 5) { $("#s_ladowaniekuszy").show(); };
		if (bohater.bd+bohater.d_bd > 13) { $("#s_lawnik").show(); };
		if (bohater.zr+bohater.d_zr > 11 && (bs[0] > 2 || bs[1] > 2)) { $("#s_magazynek").show(); };
		if (sp[0] > 3 && bohater.sp+bohater.d_sp > 11) { $("#s_meczbojowy").show(); };
		if (bohater.zr+bohater.d_zr > 11 && bohater.pc+bohater.d_pc > 9 && ww[2] > 1 && ot[0] > 0) { $("#s_miotaczkul").show(); };
		if (bohater.zr+bohater.d_zr > 11 && em[1] > 2 && me[2] > 2) { $("#s_mistrzopaskiuciskowej").show(); };
		if (bohater.zr+bohater.d_zr > 13 && ww[1] > 5) { $("#s_mistrzwloczni").show(); };
		if (em[0] > 10 && (te[0] > 10 || te[1] > 10)) { $("#s_myslecjakmaszyna").show(); };
		if (pt[0] > 3) { $("#s_napewnodzialal").show(); };
		if (bohater.sp+bohater.d_sp > 12 && te[0] > 2) { $("#s_naprawde").show(); };
		if (wo[0] > 3 || wo[1] > 3 || wo[2] > 3) { $("#s_nauczyciel").show(); };
		if (bohater.ch+bohater.d_ch > 11 && sw[0] > 3) { $("#s_niewrazliwosc").show(); };
		if (pt[0] > 3) { $("#s_nostrzelaj").show(); };
		if (bohater.zr+bohater.d_zr > 11 && ww[1] > 4) { $("#s_nozownik").show(); };
		if (ww[0] > 1) { $("#s_obezwladnienie").show(); };
		if (bohater.sp+bohater.d_sp > 11 && bohater.ch+bohater.d_ch > 11) { $("#s_odnajdowanie").show(); };
		if (pr[2] > 3) { $("#s_odpornosc").show(); };
		if (pr[1] > 5) { $("#s_odtrucie").show(); };
		if (bohater.sp+bohater.d_sp > 9 && zm[0] > 3) { $("#s_odwrocenie").show(); };
		if (ww[0] > 4 && bohater.zr+bohater.d_zr > 11) { $("#s_origami").show(); };
		if ((ww[0] > 3 || ww[1] > 3) && sn[2] > 1 && bohater.sp+bohater.d_sp > 11) { $("#s_osmiornica").show(); };
		if (te[1] > 1 && zm[2] > 1) { $("#s_otwieraniezamkowelektronicznych").show(); };
		if (bohater.zr+bohater.d_zr > 11 && bohater.bd+bohater.d_bd > 11) { $("#s_padnij").show(); };
		if (bohater.zr+bohater.d_zr > 13 && sn[1] > 7) { $("#s_pajak").show(); };
		if (me[2] > 3 && bohater.sp+bohater.d_sp > 13) { $("#s_panplaster").show(); };
		if ((bs[0] > 2 || bs[1] > 2) && bohater.zr+bohater.d_zr > 11 && bohater.ch+bohater.d_ch > 11) { $("#s_pewnareka").show(); };
		if (bohater.zr+bohater.d_zr > 11 && ww[0] > 2 && sn[2] > 1) { $("#s_pierwotny").show(); };
		if (sn[2] > 2 && bohater.zr+bohater.d_zr > 12 && bohater.pc+bohater.d_pc > 11) { $("#s_pitbull").show(); };
		if (te[2] > 1 && (sp[0] > 1 || sp[1] > 1)) { $("#s_plugplay").show(); };
		if (pp[2] > 2 && bohater.zr+bohater.d_zr > 11) { $("#s_poschodach").show(); };
		if (bohater.sp+bohater.d_sp > 11 && (te[0] > 5 || te[1] > 5)) { $("#s_podrasowanie").show(); };
		if (pp[2] > 5 && bohater.zr+bohater.d_zr > 11) { $("#s_polozeniemotocykla").show(); };
		if (te[0] > 2 || te[1] > 2) { $("#s_prowizorka").show(); };
		if (sn[1] > 2) { $("#s_rappeling").show(); };
		if (jd[0] > 2 && jd[2] > 4) { $("#s_rodeo").show(); };
		if (ww[0] > 5 && bohater.zr+bohater.d_zr > 11 && bohater.bd+bohater.d_bd > 11) { $("#s_rozroba").show(); };
		if (ww[0] > 2 && bohater.ch+bohater.d_ch > 15) { $("#s_roar").show(); };
		if (bohater.bd+bohater.d_bd > 15 && bs[2] > 5) { $("#s_ruchomegniazdo").show(); };
		if ((bs[0] > 3 || bs[1] > 3 || bs[2] > 3) && bohater.sp+bohater.d_sp > 11 && bohater.pc+bohater.d_pc > 9) { $("#s_ruchomycel").show(); };
		if ((te[0] > 3 || te[1] > 3) && bohater.sp+bohater.d_sp > 9) { $("#s_rzutoka").show(); };
		if (bohater.zr+bohater.d_zr > 9 && ww[1] > 2) { $("#s_samuraj").show(); };
		if (ot[1] > 5) { $("#s_sherlock").show(); };
		if (bohater.bd+bohater.d_bd > 12 && ww[2] > 3) { $("#s_sleklerezada").show(); };
		if (bohater.zr+bohater.d_zr > 13 && ww[0] > 3) { $("#s_slup").show(); };
		if (bohater.pc+bohater.d_pc > 9 && bd[2] > 1) { $("#s_skladamunicji").show(); };
		if (bohater.ch+bohater.d_ch > 13 && pp[2] > 3) { $("#s_skok").show(); };
		if (sg[0] > 3) { $("#s_sluchabsolutny").show(); };
		if (bs[1] > 5 && bohater.pc+bohater.d_pc > 13) { $("#s_snajper").show(); };
		if (sn[0] > 4) { $("#s_spacnawodzie").show(); };
		if (bs[0] > 1 && bohater.pc+bohater.d_pc > 9 && bohater.sp+bohater.d_sp > 9) { $("#s_strzeleckieszonkowy").show(); };
		if (ww[0] > 3 || ww[1] > 3) { $("#s_szachista").show(); };
		if (sg[2] > 6 && bohater.pc+bohater.d_pc > 13) { $("#s_szostyzmysl").show(); };
		if (zm[1] > 7 && bohater.sp+bohater.d_sp > 11) { $("#s_sztuczkikarciane").show(); };
		if (pt[0] > 1) { $("#s_sztuka").show(); };
		if (bohater.zr+bohater.d_zr > 13) { $("#s_szybkibill").show(); };
		if (ww[2] > 3 && bohater.zr+bohater.d_zr > 11) { $("#s_szybkirzut").show(); };
		if (bd[0] > 3 && bohater.bd+bohater.d_bd > 11) { $("#s_szybkiestrzelanie").show(); };
		if (bs[1] > 3) { $("#s_srubobranie").show(); };
		if (ww[1] > 3 && bohater.bd+bohater.d_bd > 13) { $("#s_taran").show(); };
		if (pp[0] > 2 || pp[1] > 2) { $("#s_taranowanie").show(); };
		if (sw[1] > 6 && ng[0] > 3) { $("#s_targowaniesie").show(); };
		if (ng[2] > 2) { $("#s_tosierobitak").show(); };
		if (bohater.pc+bohater.d_pc > 11 && sg[1] > 3) { $("#s_wmgnieniuoka").show(); };
		if (ww[1] > 4 && bohater.zr+bohater.d_zr > 11) { $("#s_walkadwiemabronmi").show(); };
		if (ww[0] > 1 && bohater.ch+bohater.d_ch > 11) { $("#s_wiatraki").show(); };
		if (true) { $("#s_wilkmorski").show(); };
		if (em[1] > 2 && bohater.pc+bohater.d_pc > 9 && bohater.ch+bohater.d_ch > 9) { $("#s_wlasciwatwarz").show(); };
		if (ww[2] > 3 && bohater.zr+bohater.d_zr > 11) { $("#s_wracajacybumerang").show(); };
		if ((ww[0] > 5 || ww[1] > 5) && bohater.pc+bohater.d_pc > 11) { $("#s_wyczekanie").show(); };
		if (em[0] > 1 && em[2] > 1) { $("#s_wyczucieemocjizwierzat").show(); };
		if (sg[2] > 3 && bohater.sp+bohater.d_sp > 11) { $("#s_wyczuciepromieniowania").show(); };
		if (pr[2] > 1 && bohater.pc+bohater.d_pc > 11) { $("#s_wyczuciezmianpogody").show(); };
		if ((bd[0] > 1 || bd[1] > 1) && bohater.sp+bohater.d_sp > 9) { $("#s_wyrabianiestrzalibeltow").show(); };
		if (zm[2] > 3 && bohater.zr+bohater.d_zr > 11) { $("#s_wytrych").show(); };
		if (bohater.sp+bohater.d_sp > 11 && em[1] > 1 && zm[1] > 1) { $("#s_zagadanie").show(); };
		if (ww[0] > 1 && bohater.bd+bohater.d_bd > 11) { $("#s_zaslona").show(); };
		if (ww[2] > 1 && bohater.zr+bohater.d_zr > 11) { $("#s_zgranie").show(); };
		if (bs[0] > 2 && bohater.pc+bohater.d_pc > 13 && bohater.sp+bohater.d_sp > 9 && bohater.zr+bohater.d_zr > 9) { $("#s_zielonybalonik").show(); };
		if (ng[1] > 3 && bohater.ch+bohater.d_ch > 11) { $("#s_zly").show(); };
		if ((ww[0] > 4 || ww[1] > 4) && bohater.sp+bohater.d_sp > 11) { $("#s_zmylka").show(); };
		if (pr[0] > 1) { $("#s_zelazneracje").show(); };
	}	show_sztuczki();
	
	$("#container").click(function(){ show_sztuczki(); });
	
	function sztuczka_reset(){ $(".sztuczki_exmpl").css({'background-image': 'url("style/img/tile1.png")', 'color': '#0E7'}); }; // resets color of green tile of sztuczki when changing a pick
	
	$("#s_bum").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Bum"); });
	$("#s_aramis").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Aramis"); });
	$("#s_asekuracja").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Asekuracja"); });
	$("#s_aspiryna").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Aspiryna"); });
	$("#s_barbarka").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Barbarka"); });
	$("#s_berserker").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Berserker"); });
	$("#s_bezoddechu").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Bez oddechu"); });
	$("#s_bezsprzetu").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Bez sprzętu, bez zabezpieczenia"); });
	$("#s_bezsznurków").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Bez sznurków"); });
	$("#s_bieg").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Bieg w ciszy"); });
	$("#s_bierzgo").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Bierz go!"); });
	$("#s_boa").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Boa"); });
	$("#s_casanova").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Casanova/Mata Hari"); });
	$("#s_chlodnymokiem").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Chłodnym okiem"); });
	$("#s_ciszej").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Ciszej niż cień"); });
	$("#s_czlowiek").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Człowiek, który kulom się nie kłaniał"); });
	$("#s_czterejpancerni").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Czterej pancerni"); });
	$("#s_czuly").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Czuły spust"); });
	$("#s_dalszy").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Dalszy zasięg"); });
	$("#s_dawid").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Dawid"); });
	$("#s_dluzszystrzal").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Dłuższy strzał"); });
	$("#s_dobryizlyglina").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Dobry i zły glina"); });
	$("#s_dobywanie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Dobywanie"); });
	$("#s_domnaplecach").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Doma na plecach"); });
	$("#s_doswiadczony").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Doświadczony"); });
	$("#s_dystans").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Dystans"); });
	$("#s_dziswszystko").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Dzis wszystko, jutro nic"); });
	$("#s_flash").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Flash"); });
	$("#s_garda").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Garda"); });
	$("#s_glaz").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Głaz"); });
	$("#s_golareka").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Goła ręka"); });
	$("#s_granienanerwach").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Granie na nerwach"); });
	$("#s_gunfight").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Gun fight"); });
	$("#s_hokuspokus").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Hokus Pokus"); });
	$("#s_immunitet").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Immunitet"); });
	$("#s_inspiracja").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Inspiracja"); });
	$("#s_jestzajebiscie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Jest zajebiście"); });
	$("#s_kanaly").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Kanały"); });
	$("#s_komandos").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Komandos"); });
	$("#s_kopzobrotu").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Kop z obrotu"); });
	$("#s_kot").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Kot"); });
	$("#s_kradziezwtlumie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Kradzież w tłumie"); });
	$("#s_lesnydiabel").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Leśny diabeł"); });
	$("#s_ladowaniekuszy").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Ładowanie kuszy"); });
	$("#s_lawnik").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Ławnik"); });
	$("#s_magazynek").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Magazynek"); });
	$("#s_meczbojowy").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Mecz bojowy"); });
	$("#s_miotaczkul").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Miotacz kul"); });
	$("#s_mistrzopaskiuciskowej").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Mistrz opaski uciskowej"); });
	$("#s_mistrzwloczni").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Mistrz włóczni"); });
	$("#s_myslecjakmaszyna").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Myśleć jak maszyna"); });
	$("#s_napewnodzialal").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Na pewno działał"); });
	$("#s_naprawde").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Naprawdę, to nie moja wina"); });
	$("#s_nauczyciel").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Nauczyciel"); });
	$("#s_niewrazliwosc").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Niewrażliwość na lekkie rany"); });
	$("#s_nostrzelaj").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "No strzelaj, złomie!"); });
	$("#s_nozownik").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Nożownik"); });
	$("#s_obezwladnienie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Obezwładnienie"); });
	$("#s_odnajdowanie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Odnajdowanie właściwej osoby"); });
	$("#s_odpornosc").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Odporność na pogodę"); });
	$("#s_odtrucie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Odtrucie żarcia"); });
	$("#s_odwrocenie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Odwrócenie uwagi"); });
	$("#s_origami").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Origami"); });
	$("#s_osmiornica").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Ośmiornica"); });
	$("#s_otwieraniezamkowelektronicznych").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Otwieranie zamków elektronicznych"); });
	$("#s_padnij").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Padnij/powstań"); });
	$("#s_pajak").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Pająk"); });
	$("#s_panplaster").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Pan plaster"); });
	$("#s_pewnareka").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Pewna ręka"); });
	$("#s_pierwotny").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Pierwotny instykt"); });
	$("#s_pitbull").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Pitbull"); });
	$("#s_plugplay").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Plug and Play"); });
	$("#s_poschodach").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Po schodach"); });
	$("#s_podrasowanie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Podrasowanie"); });
	$("#s_polozeniemotocykla").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Położenie motocykla"); });
	$("#s_prowizorka").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Prowizorka"); });
	$("#s_rappeling").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Rappeling"); });
	$("#s_rodeo").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Rodeo"); });
	$("#s_rozroba").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Rozróba"); });
	$("#s_roar").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Rrrroooaaarrr"); });
	$("#s_ruchomegniazdo").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Ruchome gniazdo CKM"); });
	$("#s_ruchomycel").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Ruchomy cel"); });
	$("#s_rzutoka").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Rzut oka"); });
	$("#s_samuraj").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Samuraj"); });
	$("#s_sherlock").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Sherlock Holmes"); });
	$("#s_sleklerezada").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Sleklerezada"); });
	$("#s_slup").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Slup dup"); });
	$("#s_skladamunicji").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Skład amunicji"); });
	$("#s_skok").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Skok"); });
	$("#s_sluchabsolutny").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Słuch absolutny"); });
	$("#s_snajper").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Snajper"); });
	$("#s_spacnawodzie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Spać na wodzie"); });
	$("#s_strzeleckieszonkowy").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Strzelec kieszonkowy"); });
	$("#s_szachista").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Szachista"); });
	$("#s_szostyzmysl").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Szósty zmysł"); });
	$("#s_sztuczkikarciane").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Sztuczki karciane"); });
	$("#s_sztuka").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Sztuka jest sztuką"); });
	$("#s_szybkibill").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Szybki Bill"); });
	$("#s_szybkirzut").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Szybki rzut"); });
	$("#s_szybkiestrzelanie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Szybkie strzelanie"); });
	$("#s_srubobranie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Śrutobranie"); });
	$("#s_taran").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Taran"); });
	$("#s_taranowanie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Taranowanie"); });
	$("#s_targowaniesie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Targowanie się"); });
	$("#s_tosierobitak").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "To się robi tak"); });
	$("#s_wmgnieniuoka").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "W mgnieniu oka"); });
	$("#s_walkadwiemabronmi").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Walka dwiema brońmi"); });
	$("#s_wiatraki").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Wiatraki"); });
	$("#s_wilkmorski").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Wilk morski"); });
	$("#s_wlasciwatwarz").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Właściwa twarz"); });
	$("#s_wracajacybumerang").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Wracający bumerang"); });
	$("#s_wyczekanie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Wyczekanie"); });
	$("#s_wyczucieemocjizwierzat").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Wyczucie emocji zwierząt"); });
	$("#s_wyczuciepromieniowania").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Wyczucie promieniowania"); });
	$("#s_wyczuciezmianpogody").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Wyczucie zmian pogody"); });
	$("#s_wyrabianiestrzalibeltow").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Wyrabianie strzał lub bełtów"); });
	$("#s_wytrych").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Wytrych"); });
	$("#s_zagadanie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Zagadanie"); });
	$("#s_zaslona").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Zasłona"); });
	$("#s_zgranie").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Zgranie"); });
	$("#s_zielonybalonik").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Zielony balonik"); });
	$("#s_zly").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Zły"); });
	$("#s_zmylka").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Zmyłka"); });
	$("#s_zelazneracje").click(function(){ sztuczka_reset(); $(this).css({'background-image': 'url("style/img/tile1clicked.png")', 'color': 'white'}); $("#karta_sztuczka_1").html(bohater.sztuczka = "Żelazne racje"); });
		
	/* * /	
	$("#container").click(function(){ 
		temp = bohater.zr;
		x = 1;
		if(bohater.pochodzenie_cecha == "Wszechstronność"){
			if(temp < bohater.pc) {
				x = 2;
				temp = bohater.pc;
			}
			if(temp < bohater.ch) {
				x = 3;
				temp = bohater.ch;
			}
			if(temp < bohater.sp) {
				x = 4;
				temp = bohater.sp;
			}
			if(temp < bohater.bd){
				x = 5;
			}
			if(x==1){
				
			}
		}
	});
	/* */
	// TWORZENIE KARTY --------------------------------------------------------------------------------------
	general_test = true;
	function before_generate_check(){
		general_test = true;
		if(bohater.pochodzenie == "Nie wybrano pochodzenia") general_test = false;
		if(bohater.profesja == "Nie wybrano profesji") general_test = false;
		if(bohater.sztuczka == "Nie wybrano sztuczki") general_test = false;
		if(bohater.pochodzenie_cecha == "Nie wybrano cechy z pochodzenia") general_test = false;
		if(bohater.profesja_cecha == "Nie wybrano cechy z profesji") general_test = false;
		if(bohater.imie == "" || bohater.ksywa == "" || bohater.nazwisko == "") general_test = false;
		else {
			$("#karta_imie").html(bohater.imie = $("#inp_imie").val());
			$("#karta_nazwisko").html(bohater.nazwisko = $("#inp_nazwisko").val());
			$("#karta_ksywa").html(bohater.ksywa = $("#inp_ksywa").val());
		}
		if( bohater.zr == 0 || bohater.pc == 0 || bohater.ch == 0 || bohater.sp == 0 || bohater.bd == 0 ) general_test = false;
	}
	
	// ----------------------------------- UZUPEŁNIANIE STATYSTYK ----------------------------
	function stat_check(x){ if (x<0) return 0; else return x; };
	
	function fill_zr(x){ $("#karta_staty1").html(x); $("#karta_staty1l").html(x-(-2)); $("#karta_staty1p").html(x-2); $("#karta_staty1t").html(stat_check(x-5)); $("#karta_staty1b").html(stat_check(x-8)); $("#karta_staty1c").html(stat_check(x-11)); $("#karta_staty1f").html(stat_check(x-15)); }
	function fill_pc(x){ $("#karta_staty2").html(x); $("#karta_staty2l").html(x-(-2)); $("#karta_staty2p").html(x-2); $("#karta_staty2t").html(stat_check(x-5)); $("#karta_staty2b").html(stat_check(x-8)); $("#karta_staty2c").html(stat_check(x-11)); $("#karta_staty2f").html(stat_check(x-15)); }
	function fill_ch(x){ $("#karta_staty3").html(x); $("#karta_staty3l").html(x-(-2)); $("#karta_staty3p").html(x-2); $("#karta_staty3t").html(stat_check(x-5)); $("#karta_staty3b").html(stat_check(x-8)); $("#karta_staty3c").html(stat_check(x-11)); $("#karta_staty3f").html(stat_check(x-15)); }
	function fill_sp(x){ $("#karta_staty4").html(x); $("#karta_staty4l").html(x-(-2)); $("#karta_staty4p").html(x-2); $("#karta_staty4t").html(stat_check(x-5)); $("#karta_staty4b").html(stat_check(x-8)); $("#karta_staty4c").html(stat_check(x-11)); $("#karta_staty4f").html(stat_check(x-15)); }
	function fill_bd(x){ $("#karta_staty5").html(x); $("#karta_staty5l").html(x-(-2)); $("#karta_staty5p").html(x-2); $("#karta_staty5t").html(stat_check(x-5)); $("#karta_staty5b").html(stat_check(x-8)); $("#karta_staty5c").html(stat_check(x-11));  $("#karta_staty5f").html(stat_check(x-15)); }
	
	function fill_all_stats(){
		fill_zr(bohater.zr*1 + bohater.d_zr*1);
		fill_pc(bohater.pc*1 + bohater.d_pc*1);
		fill_ch(bohater.ch*1 + bohater.d_ch*1);
		fill_sp(bohater.sp*1 + bohater.d_sp*1);
		fill_bd(bohater.bd*1 + bohater.d_bd*1);
	}
	
	function fill_card(){
		
		if (u_inp_test) wsp_rzuc();
		fill_all_stats();
		$("#karta_poch").html(bohater.pochodzenie);
		$("#karta_poch_cecha").html(bohater.pochodzenie_cecha);
		$("#karta_prof").html(bohater.profesja);
		$("#karta_prof_cecha").html(bohater.profesja_cecha);
		$("#karta_spec").html(bohater.specjalizacja);
		$("#karta_sztuczka_1").html(bohater.sztuczka);
		
		for (i = 0; i < 3; i++){
			bohater.ww[i] = ww[i];
			bohater.bs[i] = bs[i];
			bohater.bd[i] = bd[i];
			bohater.pp[i] = pp[i];
			bohater.zm[i] = zm[i];
			bohater.ot[i] = ot[i];
			bohater.sg[i] = sg[i];
			bohater.ka[i] = ka[i];
			bohater.pr[i] = pr[i];
			bohater.ng[i] = ng[i];
			bohater.em[i] = em[i];
			bohater.sw[i] = sw[i];
			bohater.me[i] = me[i];
			bohater.te[i] = te[i];
			bohater.wo[i] = wo[i];
			bohater.sp[i] = sp[i];
			bohater.pt[i] = pt[i];
			bohater.sn[i] = sn[i];
			bohater.jd[i] = jd[i];
		}
	}
	
	// ----------------------------- GENEROWANIE PLIKU PDF ------------------------------
	function genPDF() {
		$("#karta").show();
		fill_card();
		before_generate_check();
		
		if(general_test){
			html2canvas(document.getElementById("karta"),{
				onrendered: function (canvas){
					var img = canvas.toDataURL("image/png");
					var doc = new jsPDF();
					doc.addImage(img, "PNG",0,0,210, 297);
					doc.save("karta_postaci.pdf");
				}
			});	
			general_test = false;
			setTimeout(function(){ $("#karta").hide(); }, 2000);
		}
		else { alert("Error general check."); $("#karta").hide(); }
	}
	$("#create_button").click(function(){ genPDF(); });
	
	$("#container").click(function(){ if(general_test) $("#karta").hide(); });
});