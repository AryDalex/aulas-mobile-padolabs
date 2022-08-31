package com.example.digitallockingpado

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.Toast
import com.google.android.material.appbar.MaterialToolbar
import com.example.digitallockingpado.Fde600wPage as Fde600wPage1

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

//        val btn = findViewById<Button>(R.id.btn)
        val mainToolBar = findViewById<MaterialToolbar>(R.id.mainToolBar)

        mainToolBar.setNavigationOnClickListener {
            Toast.makeText(
                this,
                "Hamburger pressionado!!!",
                Toast.LENGTH_SHORT
            ).show()
            Log.e("app", "menu click")
        }

        mainToolBar.setOnMenuItemClickListener { menuItem ->
            when(menuItem.itemId) {
                R.id.menu_item_notifications -> {
                    Toast.makeText(
                        this,
                        "Ir para a página de notificações!!!",
                        Toast.LENGTH_SHORT
                    ).show()

                    true
                }
                R.id.menu_item_cart -> {
                    Toast.makeText(
                        this,
                        "Ir para a página de carrinho!!!",
                        Toast.LENGTH_SHORT
                    ).show()

                    true
                }
                else -> false
            }
        }

//        btn.setOnClickListener {
//            startActivity(Intent(this, Fde600wPage1::class.java))
//        }
    }
}