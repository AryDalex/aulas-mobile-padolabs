package com.example.digitallockingpado

import android.app.ProgressDialog.show
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class Fde600wPage : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fde600w)

//        val btn = findViewById<Button>(R.id.btnComprar)
//
//        btn.setOnClickListener {
//            startActivity(Intent(this, MainActivity::class.java))
//        }

        val btnComprar = findViewById<Button>(R.id.btnComprar)

        btnComprar.setOnClickListener {
            val toast = Toast.makeText(this, "Ainda não implementado!", Toast.LENGTH_LONG)

            toast.show()
        }
    }
}