package com.example.calculaimc

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    @SuppressLint("WrongViewCast")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val textIMC = findViewById<TextView>(R.id.textIMC)
        val textIdade = findViewById<EditText>(R.id.textIdade)
        val textAltura = findViewById<EditText>(R.id.textAltura)
        val textQuilos = findViewById<EditText>(R.id.textQuilos)
        val btnMulher = findViewById<Button>(R.id.btnMulher)
        val btnHomem = findViewById<Button>(R.id.btnHomem)
        val btnOk = findViewById<Button>(R.id.btnOk)
        val textSexo = findViewById<TextView>(R.id.textSexo)

        var click = 0;

        btnMulher.setOnClickListener {
            click = 1;
            textSexo.setText("Sou uma mulher");
        }

        btnHomem.setOnClickListener {
            click = 2;
            textSexo.setText("Sou um homem");
        }

        btnOk.setOnClickListener {
            if(!textAltura.text.isEmpty() && !textQuilos.text.isEmpty() && !textIdade.text.isEmpty()) {
                val idade = textIdade.text.toString().toInt()
                val altura = textAltura.text.toString().toDouble()
                val quilos = textQuilos.text.toString().toDouble()
                val calculaIMC = quilos / (altura * altura);

                if(click == 1) {
                    if(idade < 18) {
                        textIMC.setText("Calculamos somente IMC de adultos!");
                    } else if(idade >= 18 && idade <= 24) {
                        if(calculaIMC < 19) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 19 && calculaIMC <= 24.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 25 && calculaIMC <= 29.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 30 && calculaIMC <= 39.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 39.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else if(idade >= 25 && idade <= 34) {
                        if(calculaIMC < 20) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 20 && calculaIMC <= 25.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 26 && calculaIMC <= 30.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 31 && calculaIMC <= 40.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 40.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else if(idade >= 35 && idade <= 44) {
                        if(calculaIMC < 21) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 21 && calculaIMC <= 26.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 27 && calculaIMC <= 31.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 32 && calculaIMC <= 41.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 41.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else if(idade >= 45 && idade <= 54) {
                        if(calculaIMC < 22) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 22 && calculaIMC <= 27.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 28 && calculaIMC <= 32.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 33 && calculaIMC <= 42.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 42.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else if(idade >= 55 && idade <= 64) {
                        if(calculaIMC < 23) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 23 && calculaIMC <= 28.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 29 && calculaIMC <= 33.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 34 && calculaIMC <= 43.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 43.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else {
                        if(calculaIMC < 24) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 24 && calculaIMC <= 29.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 30 && calculaIMC <= 34.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 35 && calculaIMC <= 44.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 44.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    }
                } else if(click == 2) {
                    if(idade < 18) {
                        textIMC.setText("Calculamos somente IMC de adultos!");
                    } else if(idade >= 18 && idade <= 24) {
                        if(calculaIMC < 20) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 20 && calculaIMC <= 25.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 26 && calculaIMC <= 30.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 31 && calculaIMC <= 40.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 40.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else if(idade >= 25 && idade <= 34) {
                        if(calculaIMC < 21) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 21 && calculaIMC <= 26.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 27 && calculaIMC <= 31.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 32 && calculaIMC <= 41.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 41.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else if(idade >= 35 && idade <= 44) {
                        if(calculaIMC < 22) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 22 && calculaIMC <= 27.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 28 && calculaIMC <= 32.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 33 && calculaIMC <= 42.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 42.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else if(idade >= 45 && idade <= 54) {
                        if(calculaIMC < 23) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 23 && calculaIMC <= 28.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 29 && calculaIMC <= 33.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 34 && calculaIMC <= 43.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 43.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else if(idade >= 55 && idade <= 64) {
                        if(calculaIMC < 24) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 24 && calculaIMC <= 29.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 30 && calculaIMC <= 34.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 35 && calculaIMC <= 44.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 44.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    } else {
                        if(calculaIMC < 25) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso baixo)");
                        } else if(calculaIMC >= 25 && calculaIMC <= 30.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Peso normal)");
                        } else if(calculaIMC >= 31 && calculaIMC <= 35.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Pré obesidade)");
                        } else if(calculaIMC >= 36 && calculaIMC <= 45.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade)");
                        } else if(calculaIMC > 45.9) {
                            textIMC.setText("Seu IMC é ${String.format("%.2f", calculaIMC)} (Obesidade grave)");
                        }
                    }
                } else {
                    textIMC.setText("Informe seu sexo!");
                }

            } else {
                textIMC.setText("Preencha todos os campos!");
            }
        }
    }
}