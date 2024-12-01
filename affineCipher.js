
        function StringToUpper() {
              var x = document.getElementById("Entered_String");
              x.value = x.value.toUpperCase();
        }
		
		function checkAlphaValid() {
              var x = document.getElementById("Alpha_Value");
              if(x.value<1 || x.value>25)
                document.getElementById("errorAlpha").innerHTML = "Error! check whether 1 &le; alpha &le; 25";
              else
                document.getElementById("errorAlpha").innerHTML = "";
  
              if(egcd(x.value,26)!=1)
                document.getElementById("errorGCD").innerHTML = "Error! check whether GCD(alpha,26) = 1";
              else
                document.getElementById("errorGCD").innerHTML = "";
        }
		
		function egcd(a, b) {
              if (a == 0)
                  return b;
  
              while (b != 0) {
                  if (a > b)
                      a = a - b;
                  else
                      b = b - a;
              }
  
              return a;
        }		

        function checkBetaValid() {
              var x = document.getElementById("Beta_Value");
              if(x.value<1 || x.value>25)
                document.getElementById("errorBeta").innerHTML = "Error! check whether 1 &le; beta &le; 25";
              else
                document.getElementById("errorBeta").innerHTML = "";
        }
		
		         
				 
		function generateAffine() {
          var str = document.getElementById("Entered_String").value;
          var alpha = document.getElementById("Alpha_Value").value;
          var beta = document.getElementById("Beta_Value").value;
  
          var n = str.length;
          var i=0;
          var numstr = [];
          var numcipher = [];
          var outputAffEnc = [];
          
          
          for(i=0;i<n;i++)
            {
              if(str[i]!=' ')
                {numstr[i]=str.charCodeAt(i)-65;
                //window.alert("numstr[i]= "+numstr[i]);
              }
              else
                {numstr[i]=-20;
                  ////window.alert(numstr[i]);
                }
              }
  
          for(i=0;i<n;i++)
              {
                if(numstr[i]!=-20)
                {
                  //window.alert("alpha = "+alpha);
                  //window.alert("beta = "+beta);
                  var q = (alpha * numstr[i]);
                  //window.alert("q = alpha * numstr[i] = "+q);
                  var r=beta;
                  var p = parseInt(r)+parseInt(q);
                  //window.alert("p = "+p);
                  numcipher[i]=p%26;   
                  //window.alert(numcipher[i]);      
                  outputAffEnc[i] = String.fromCharCode(numcipher[i]+65);
                }
                else
                {
                  outputAffEnc[i]=" ";
                }
              }
  
              document.getElementById("AffineEnc").innerHTML = "<b> ENCODED TEXT</b> <br><br>"+outputAffEnc.join("");
  
        }
  







	    function StringToUpper_two() {
              var x = document.getElementById("Entered_String_two");
              x.value = x.value.toUpperCase();
        }
  
        function checkAlphaValid_two() {
              var x = document.getElementById("Alpha_Value_two");
              if(x.value<1 || x.value>25)
                document.getElementById("errorAlpha_two").innerHTML = "Error! check whether 1 &le; alpha &le; 25";
              else
                document.getElementById("errorAlpha_two").innerHTML = "";
  
              if(egcd(x.value,26)!=1)
                document.getElementById("errorGCD_two").innerHTML = "Error! check whether GCD(alpha,26) = 1";
              else
                document.getElementById("errorGCD_two").innerHTML = "";
        }
        
        function checkBetaValid_two() {
              var x = document.getElementById("Beta_Value_two");
              if(x.value<1 || x.value>25)
                document.getElementById("errorBeta_two").innerHTML = "Error! check whether 1 &le; beta &le; 25";
              else
                document.getElementById("errorBeta_two").innerHTML = "";
        }
		      function decodeAffine() {
          var str = document.getElementById("Entered_String_two").value;
          var alpha = document.getElementById("Alpha_Value_two").value;
          var beta = document.getElementById("Beta_Value_two").value;

          var n = str.length;
          var i=0;
          var numstr = [];
          var numcipher = [];
          var outputAffDec = [];
          
          for(i=0;i<n;i++)
            {
              if(str[i]!=' ')
                {numstr[i]=str.charCodeAt(i)-65;
                //window.alert("numstr[i]= "+numstr[i]);
              }
              else
                {numstr[i]=-20;
                  ////window.alert(numstr[i]);
                }
              }
          var alphaInverse = GetMultiplicativeInverse(alpha);

          for(i=0;i<n;i++){
                if(numstr[i]!=-20){
                    numcipher[i]=(alphaInverse*(numstr[i]-beta))%26;

                    if(numcipher[i]<0){ 
                            numcipher[i]=numcipher[i]+26;
                            //To avoid negative numbers
                        } 
                    outputAffDec[i] = String.fromCharCode(numcipher[i]+65);
                } 
                else{ 
                    outputAffDec[i] = " ";
                }
            }
            document.getElementById("AffineDec").innerHTML = "<b>DECODED TEXT</b> <br><br>"+outputAffDec.join("")+"<br>";
          
      }

      function GetMultiplicativeInverse(alpha){ 
            var i,MI; 
            for(i=1;i<=alpha;i++) 
            {
                MI=((i*26)+1); 
                if(MI%alpha==0)
                { 
                    break;
                }
        } 
        MI=MI/alpha;
        return MI;
        }

